import { siteConfig, siteUrl } from "@/lib/site";

export default function SEOJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: "Full Stack Engineer",
          url: siteUrl,
          image: `${siteUrl}/og.jpg`,
          email: siteConfig.email,
          sameAs: [siteConfig.github, siteConfig.linkedin],
          worksFor: {
            "@type": "Organization",
            name: "Step By Tech",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Damascus University",
          },
          knowsAbout: [
            "Node.js",
            "NestJS",
            "TypeScript",
            "React",
            "Next.js",
            "AWS",
            "MongoDB",
            "MySQL",
            "Redis",
            "Real-time systems",
            "Payment integrations",
          ],
        }),
      }}
    />
  );
}
