export const siteUrl = "https://mohannad-alhajy.vercel.app";

// The static PDF in /public.
export const resumeFile = "/mohannad-alhajy-cv.pdf";

// Links point at the API route instead of the file so downloads can be
// emailed; the route streams the PDF from `resumeFile`.
export const resumeUrl = "/api/resume";

// Same route, but asks it to serve the PDF inline so the browser's viewer
// opens it instead of committing the visitor to a download. Used by the
// preview embed on `resumePage` and the "open in new tab" links.
export const resumeViewUrl = "/api/resume?view=1";

// The framed resume page — where "view" links point, so visitors land in the
// site rather than on a bare PDF.
export const resumePage = "/resume";
export const resumeUpdated = "Sept 2026";

export const siteConfig = {
  name: "Mohannad Alhajy",
  title: "Mohannad Alhajy | Senior Software Engineer, Backend-Focused Full Stack",
  description:
    "Senior Software Engineer, backend-focused full stack \u2014 scalable APIs, real-time systems, and subscription/payment flows in Node.js & NestJS, serving 30,000+ users in production.",
  email: "mohannad.alhajy@gmail.com",
  github: "https://github.com/mohannadalhajy",
  linkedin: "https://linkedin.com/in/mohannad-alhajy",
  phone: "+971 50 998 7098",
  whatsapp:
    "https://wa.me/971509987098?text=Hello%20Mohannad%2C%20I%20saw%20your%20portfolio",
};
