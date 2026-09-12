import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

const MAX_LENGTHS = { name: 100, email: 254, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Module-scoped so the client (and its connection pool) is reused across
// invocations instead of being rebuilt on every request.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getClientIp(request: Request) {
  // Vercel appends the connecting client's IP as the first entry of
  // x-forwarded-for; there's no trusted lower-level source in a serverless
  // route handler.
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { success, reset } = await checkRateLimit(ip);
  if (!success) {
    const retryAfterSeconds = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real users never fill this hidden field.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message
  ) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!resend) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  // Strip line breaks before this reaches a header value — an unsanitized
  // \r\n in `name` could otherwise inject extra email headers.
  const safeName = name.trim().replace(/[\r\n]+/g, " ");
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: siteConfig.email,
      replyTo: trimmedEmail,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
