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
      name: "Hybrid Agentic RAG Platform",
      description:
        "Architected an autonomous AI Agent using LangGraph that dynamically routes queries between a private RAG knowledge base and real-time web search with a self-correcting LLM 'Judge' loop.",
      link: "https://github.com/Deep9901/hybrid-rag-agent",
      skills: ["LangGraph", "FastAPI", "Pinecone", "Groq", "Tavily", "Llama 3", "Streamlit"],
    },
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
    {
      name: "Pathfinder: Interactive Algorithm Visualizer",
      description:
        "Developed an interactive web app to visualize pathfinding & maze generation algorithms in real-time",
      link: "https://github.com/Deep9901/pathfinder",
      skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    },
  ],
  experience: [
    {
      company: "Larsen & Toubro",
      title: "Data Analyst Intern",
      dateRange: "Dec 2024 - March 2025",
      bullets: [
        "Developed high-performance Node.js pipelines for machine telemetry ingestion, ensuring data integrity for downstream AI analysis.",
        "Built a RAG-based analytical engine using LLMs to query historical logs via natural language, reducing fault diagnosis time by 40%.",
        "Optimized PostgreSQL time-series performance through partitioning and indexing, reducing API latency for complex aggregations.",
        "Orchestrated real-time monitoring via WebSockets and streamlined Docker-based deployments for CI/CD environment consistency."
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
