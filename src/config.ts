export const siteConfig = {
  name: "Subham Das",
  title: "Software Engineer",
  description: "Portfolio website of Subham Das",
  accentColor: "#1d4ed8",
  social: {
    email: "das.subham2001@gmail.com",
    linkedin: "https://www.linkedin.com/in/subham-das-306a3b218/",
    twitter: "https://x.com/deep_kernel",
    github: "https://github.com/Deep9901",
  },
  aboutMe:
    "I'm a final-year Computer Science student at IIIT Kalyani. I like solving complex analytical problems and turning them into working software. Currently, I'm deep into architecting distributed systems, specifically focusing on microservices and real-time, event-driven environments.",
  skills: ["Javascript", "Python", "React", "Node.js", "Express", "AWS", "Docker", "Kubernetes"],
  projects: [
    {
      name: "InterviewIQ: Full-Stack Technical Interview Platform",
      description:
        "Engineered a full-stack platform featuring real-time video calls (WebRTC), a collaborative code editor, and an auto-grading system for seamless technical interviews.",
      link: "https://github.com/Deep9901/InterviewIq",
      skills: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Clerk", "Stream API"],
    },
    {
      name: "Vox: Microservices Chat Platform",
      description:
        "Built a scalable microservices architecture using RabbitMQ for event-driven communication, Redis for real-time caching, and a multi-database persistence layer.",
      link: "https://github.com/Deep9901/Vox",
      skills: ["TypeScript", "Node.js", "Microservices", "RabbitMQ", "Multi-DB", "Docker", "Redis"],
    },
    {
      name: "VibeCodeAI: AI-Powered Web IDE",
      description:
        "Developed a full-stack web IDE with in-browser Node.js execution via WebContainers and local AI integration using Ollama for privacy-focused code assistance.",
      link: "https://github.com/Deep9901/vibecodeai",
      skills: ["Next.js", "TypeScript", "WebContainers", "Ollama", "Monaco Editor", "MongoDB", "Tailwind CSS", "ShadCN UI"],
    },
  ],
  experience: [
    {
      company: "Larsen & Toubro",
      title: "Data Analyst Intern",
      dateRange: "Dec 2024 - March 2025",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },

  ],
  education: [
    {
      school: "Institute of Information Technology, Kalyani",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022-2026",
      achievements: [
        "Current CGPA Laude (9.19/10)",
        "Top 5% of the class",
        "Former President of Open-Source Club",
      ],
    },

  ],
};
