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
          email: siteConfig.email,
          sameAs: [siteConfig.github, siteConfig.linkedin],
        }),
      }}
    />
  );
}
