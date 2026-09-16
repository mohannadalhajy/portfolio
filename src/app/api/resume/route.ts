import { after, NextResponse } from "next/server";
import { Resend } from "resend";
import { resumeFile, siteConfig } from "@/lib/site";
import { shouldNotify } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

// Module-scoped so the client (and its connection pool) is reused across
// invocations instead of being rebuilt on every request.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function notify(details: Record<string, string>) {
  if (!resend) {
    console.error("RESEND_API_KEY is not configured — resume download not emailed.");
    return;
  }

  // One email per visitor per hour: a single click can produce several
  // requests (range requests, in-app browsers, PDF viewer prefetch).
  if (!(await shouldNotify(`resume:${details.IP}`, 60 * 60))) return;

  const rows = Object.entries(details);

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: siteConfig.email,
      subject: "Someone downloaded your resume",
      text: rows.map(([key, value]) => `${key}: ${value}`).join("\n"),
      html: rows
        .map(([key, value]) => `<p><strong>${key}:</strong> ${escapeHtml(value)}</p>`)
        .join(""),
    });
    if (error) console.error("Resend error (resume download):", error);
  } catch (err) {
    console.error("Resume download notification failed:", err);
  }
}

export async function GET(request: Request) {
  const details = {
    IP: getClientIp(request),
    Referrer: request.headers.get("referer") ?? "direct",
    "User agent": request.headers.get("user-agent") ?? "unknown",
    Country: request.headers.get("x-vercel-ip-country") ?? "unknown",
    City: request.headers.get("x-vercel-ip-city") ?? "unknown",
    Time: new Date().toUTCString(),
  };

  // Runs after the PDF has been sent, so the notification never delays the
  // download (and a Resend outage can't break it).
  after(() => notify(details));

  // The PDF lives in /public; fetching it from this deployment's own origin
  // works on serverless, where the file isn't guaranteed to be on the
  // function's filesystem.
  const fileUrl = new URL(resumeFile, request.url);
  const upstream = await fetch(fileUrl);

  if (!upstream.ok || !upstream.body) {
    console.error(`Failed to read resume at ${fileUrl.pathname}: ${upstream.status}`);
    // Still hand the visitor the file rather than an error page.
    return NextResponse.redirect(fileUrl, 302);
  }

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFile.replace(/^\//, "")}"`,
      "Cache-Control": "no-store",
    },
  });
}
