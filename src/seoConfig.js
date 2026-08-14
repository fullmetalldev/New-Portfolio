// SEO Configuration and Site Information
export const siteInfo = {
  title: "Erbol | Portfolio",
  description: "Full-stack developer portfolio showcasing projects, skills, and experience",
  author: "Erbol",
  url: "https://erbol-portfolio.com", // Update with your actual domain
  image: "/og-image.png", // Update with your OG image
  keywords: "developer, portfolio, full-stack, React, Node.js, web development",
  type: "website",
  locale: "en_US",
};

export const pages = {
  home: {
    title: `${siteInfo.title} - Home`,
    description: siteInfo.description,
    path: "/",
  },
  about: {
    title: `${siteInfo.title} - About`,
    description: "Learn more about my background, skills, and professional experience",
    path: "/#About",
  },
  projects: {
    title: `${siteInfo.title} - Projects`,
    description: "Explore my latest projects and work samples",
    path: "/#Projects",
  },
  work: {
    title: `${siteInfo.title} - Work Experience`,
    description: "My professional experience and employment history",
    path: "/#Work",
  },
  techStack: {
    title: `${siteInfo.title} - Tech Stack`,
    description: "Technologies and tools I work with",
    path: "/#TechStack",
  },
  contacts: {
    title: `${siteInfo.title} - Contact`,
    description: "Get in touch with me",
    path: "/#Contacts",
  },
};

export const socialLinks = {
  twitter: "https://twitter.com/your-handle", // Update with your actual links
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "your.email@example.com",
};
