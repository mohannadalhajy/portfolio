export default function SEOJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohannad Alhajy",
          jobTitle: "Full Stack Engineer",
          url: "https://your-domain.com",
          sameAs: ["https://github.com/mohannadalhajy", "https://linkedin.com/in/mohannad-alhajy"],
        }),
      }}
    />
  );
}
