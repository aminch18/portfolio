// TypeScript types
import { Rocket, Target, Zap, Code, Cloud, Database, Users } from 'lucide-react';

export type Role = {
  title: string;
  period: string;
  achievements: string[];
  technologies: string[];
};

export type Company = {
  company: string;
  period: string;
  location: string;
  description: string;
  icon: any;
  side: 'left' | 'right';
  companyLogo: string;
  companyFallback: string;
  roles: Role[];
};

export const engineeringJourney: Company[] = [
  {
    company: "Gartner Digital Markets",
    period: "May 2022 — Present",
    location: "Barcelona, Spain",
    description: "Reviews Platform team powering all Gartner Digital Markets marketplaces (Capterra, GetApp, Software Advice). Processing millions of software reviews to generate reliable, actionable insights.",
    icon: Rocket,
    side: "left",
    companyLogo: "https://emt.gartnerweb.com/ngw/commonassets/images/build-graphics/gartner-logos/gartner.svg",
    companyFallback: "GDM",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "October 2023 — Present",
        achievements: [
          "Leading junior and mid-level engineers, conducting technical interviews and code reviews",
          "Defining and implementing transversal architectural standards across teams",
          "Leading complex initiatives that span multiple teams and impact business metrics",
          "Working closely with Product, SEO, and Site teams on strategic initiatives",
          "Leading efforts to improve system performance, reliability, and operational efficiency"
        ],
        technologies: ["C#", ".NET 8", ".NET 9", "TypeScript", "Next.js", "React", "PostgreSQL", "Kafka", "AWS EKS", "OpenSearch"]
      },
      {
        title: "Software Advanced Engineer",
        period: "May 2022 — October 2023", 
        achievements: [
          "Designed and maintained pipelines transforming reviews into quality insights",
          "Led the refactor of the review scoring system into a decoupled, resilient engine",
          "Built gamification systems incentivizing vendors to collect high-quality reviews",
          "Evolved the review moderation platform from Angular to Next.js",
          "Implemented event-driven architectures with Kafka/Confluent Cloud"
        ],
        technologies: ["C#", ".NET 6", "TypeScript", "Angular", "Next.js", "React", "PostgreSQL", "Kafka", "AWS"]
      }
    ]
  },
  {
    company: "Plain Concepts - SCRM Lidl Digital Hub",
    period: "September 2019 — May 2022",
    location: "Barcelona, Spain", 
    description: "Working on Lidl Plus App project serving more than 60 million users. High-availability backend system based on microservices, cloud, data analysis, and real-time data ingestion.",
    icon: Target,
    side: "right",
    companyLogo: "https://www.plainconcepts.com/wp-content/uploads/2023/01/logo.svg",
    companyFallback: "PC",
    roles: [
      {
        title: "Backend Sr Software Developer",
        period: "~March 2020 — May 2022",
        achievements: [
          "Migrated monolithic systems to microservices in .NET",
          "Worked on Communications squad implementing user promotion and notification systems",
          "Designed and led migration of Alerts system from monolith to microservices",
          "Upgraded systems from .NET Core 3.1 to .NET 6",
          "Implemented CQRS + DDD architectures for critical domains"
        ],
        technologies: [".NET 6", "C#", "Azure Functions", "Cosmos DB", "Event Hub", "Service Bus", "AKS", "Terraform"]
      },
      {
        title: "IT Support Consultant", 
        period: "September 2019 — March 2020",
        achievements: [
          "Built and maintained internal applications for Customer Support",
          "Developed tools supporting the Lidl Plus App ecosystem",
          "Gained foundational experience in enterprise-scale systems",
          "Collaborated with support teams to improve operational efficiency"
        ],
        technologies: [".NET Core", "C#", "Azure", "Internal Tools", "Customer Support Systems"]
      }
    ]
  },
  {
    company: "Pasiona Consulting",
    period: "May 2018 — September 2019",
    location: "Barcelona, Spain",
    description: "Dual internship program and early career development focusing on both Front-end and Back-end development with SharePoint Online and Azure Functions.",
    icon: Zap,
    side: "left",
    companyLogo: "https://pasiona.com/wp-content/themes/pasiona_theme/assets/svg/pasiona-logo.svg",
    companyFallback: "PA",
    roles: [
      {
        title: "Junior Developer",
        period: "June 2019 — September 2019",
        achievements: [
          "Developed SPFx components with React.js in TypeScript for SharePoint Online",
          "Built Azure Functions operating as orchestrators for different services", 
          "Worked with multitasking programming and Test Driven Development methodology",
          "Used Azure DevOps: Azure Boards (SCRUM), Azure Repos (Git Flow), Azure Pipelines (CI/CD)",
          "Obtained and analyzed data to assess system capabilities"
        ],
        technologies: ["React.js", "TypeScript", "SharePoint SPFx", "Azure Functions", "Azure DevOps", "SCRUM", "TDD"]
      },
      {
        title: "Trainee Developer",
        period: "May 2018 — June 2019", 
        achievements: [
          "Dual internship program focusing on full-stack development while studying",
          "Backend development with .NET & .NET Core Framework, ASP.NET & ASP.NET Core",
          "Learned and applied Domain Driven Design paradigm and Test Driven Development",
          "Frontend development with React.js ES6, TypeScript, HTML5",
          "Published and tracked App Services in Azure, implemented comprehensive unit testing"
        ],
        technologies: [".NET Framework", ".NET Core", "ASP.NET Core", "Entity Framework", "React.js", "TypeScript", "Azure"]
      }
    ]
  }
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
  status?: string;
};

export const education: Education[] = [
  {
    degree: "Engineer's degree, Computer Engineering",
    institution: "Universitat Oberta de Catalunya",
    period: "Sep 2021 — Present",
    description: "Currently pursuing my passion for Computer Engineering at my own pace, balancing work and studies. Focusing on software architecture, distributed systems, and applying real-world experience to academic learning.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEyUV6w_gu7xw/company-logo_100_100/company-logo_100_100/0/1694764811277/uoc_logo?e=1764201600&v=beta&t=J1V-d5x6tZOvOFQwwovjuAbFKwHWcr_ty-JoiN0_v_o",
    status: "In progress"
  },
  {
    degree: "Senior Technician in Crossplatform Application Development",
    institution: "Escola Pia Mataró - Formació Professional",
    period: "2017 — 2019",
    description: "Technical certification in Crossplatform Applications Development (Higher Education). Completed while working full-time, gaining hands-on experience with Android Studio, SQL Server, Java, HTML, and PHP. This professional qualification launched my career in software development.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHwVGV9Gb8l8g/company-logo_100_100/company-logo_100_100/0/1630650212178/fp_escola_pia_matar_logo?e=1764201600&v=beta&t=YOHNgZ5w_g5odZ9-Xex4uyhQtKdilOEXQZFHXU2bFqs"
  },
  {
    degree: "Engineer's degree, Telecommunications Engineering",
    institution: "Universitat de Barcelona",
    period: "Sep 2015 — 2017",
    description: "Started my university journey here, completing 60 ECTS in basic subjects. Due to economic circumstances, I paused my studies to focus on work, which led me to discover my true passion for software development.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFn6nu8RTCvCA/company-logo_100_100/B4DZkOEwyRIcAc-/0/1756877757686/university_of_barcelona_logo?e=1764201600&v=beta&t=zOBmVmK9agD6NOBwzBIAG2X82bYgfQGX2vaVQKAEAXM",
    status: "Paused"
  }
];

export const educationJourneyNote = "My path reflects balancing education with life's realities. Economic circumstances led me to pause my first degree, but guided me to software development—my true calling. I earned my technical certification as a Senior Technician in Crossplatform Development while working full-time, and now I'm completing my Computer Engineering degree at my own pace, applying professional experience to academic learning.";

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  status?: string;
  logo?: string; // Company logo URL or emoji
};

export const certificates: Certificate[] = [
  {
    name: "EF SET English Certificate 71/100 (C2 Proficient)",
    issuer: "EF SET",
    date: "Apr 2025",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEw-1S8jictTA/company-logo_100_100/B4EZdFpZBcH0AQ-/0/1749220168176/efset_logo?e=1764201600&v=beta&t=aRz6u0ZU7UnuKVwg3BQXYEiJDUHptUwfBfZtyUbDdwo"
  },
  {
    name: "Security Yellow Belt",
    issuer: "Security Journey",
    date: "Dec 2024",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHp0hC9d52dOg/company-logo_100_100/company-logo_100_100/0/1719939549314/security_journey_logo?e=1764201600&v=beta&t=N4nxTXjqIFfVgDV3Ol4K-FhKTFgXEcmIei6WAcISs4c"
  },
  {
    name: "Hacking For Begginers",
    issuer: "Hackers Academy",
    date: "Nov 2021",
    credentialId: "UC-4b701f3a-6b32-4e40-9862-ba0cb7f2e967",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGG2hKMXbwxQw/company-logo_100_100/company-logo_100_100/0/1630588528738/hackersacademy_logo?e=1764201600&v=beta&t=qbTPxiI1FRzK7aU6M-pwYJr12E2jWX0D-wRLKmRh5rk"
  },
  {
    name: "Aplicaciones web en tiempo real con SignalR Core",
    issuer: "Udemy",
    date: "May 2020",
    credentialId: "UC-61f8f77e-e552-426d-a305-1090648f4bdb",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_100_100/company-logo_100_100/0/1723593046388/udemy_logo?e=1764201600&v=beta&t=4eZZqcP5gzMOqyUNQAubg2eIm2OrVBCbGsrP69_0eX4"
  },
  {
    name: ".NET Application Security and Secure Coding Training",
    issuer: "Checkmarx",
    date: "Apr 2022",
    credentialId: "e8eac005f6d62591bce38902afaa6e26a58eae38",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH2KfSPEaLuEQ/company-logo_100_100/B4EZpPiWCRHEAQ-/0/1762270995084/checkmarx_logo?e=1764201600&v=beta&t=p3OkUXzZ9i6-Q1yTLf_ylQrpdNCvB-i2jyt2-d_WEPA"
  }
];

export type SkillGroup = {
  category: string;
  items: { name: string; level: number }[];
  icon: any;
  color: string;
};

export const skills: SkillGroup[] = [
  {
    category: "Backend Technologies",
    items: [
      { name: "C# / .NET", level: 95 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Go", level: 80 }
    ],
    icon: Code,
    color: "from-blue-500 to-blue-600"
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS", level: 92 },
      { name: "Azure", level: 90 },
      { name: "Docker/Kubernetes", level: 88 },
      { name: "Terraform", level: 82 }
    ],
    icon: Cloud,
    color: "from-purple-500 to-purple-600"
  },
  {
    category: "Data & Messaging",
    items: [
      { name: "PostgreSQL", level: 93 },
      { name: "Apache Kafka", level: 90 },
      { name: "Redis", level: 88 },
      { name: "MongoDB", level: 85 }
    ],
    icon: Database,
    color: "from-green-500 to-green-600"
  },
  {
    category: "Architecture & Design",
    items: [
      { name: "Microservices", level: 94 },
      { name: "Event-Driven Architecture", level: 92 },
      { name: "CQRS/DDD", level: 90 },
      { name: "System Design", level: 95 }
    ],
    icon: Users,
    color: "from-orange-500 to-orange-600"
  }
];

export type Language = {
  name: string;
  level: number;
  description: string;
};

export const languages: Language[] = [
  { name: "Spanish", level: 100, description: "Native" },
  { name: "English", level: 90, description: "Fluent" },
  { name: "French", level: 70, description: "Intermediate" },
  { name: "Arabic", level: 85, description: "Advanced" }
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  image?: string;
  status: "completed" | "in-progress" | "planned";
};

// ========================================
// PROJECTS - Currently showing placeholder "Coming Soon" projects
// ========================================
// To restore real projects, uncomment the section below and comment out the placeholder projects

/* REAL PROJECTS - BACKUP (Uncomment to restore)
export const projects: Project[] = [
  {
    title: "Distributed Review Processing System",
    description: "High-throughput event-driven system processing millions of software reviews",
    longDescription: "Built a scalable microservices architecture that ingests, validates, and enriches software reviews from multiple sources. Implemented event sourcing with Kafka for reliable data processing and implemented sophisticated NLP pipelines for sentiment analysis and quality scoring.",
    technologies: ["C#", ".NET 8", "Kafka", "PostgreSQL", "OpenSearch", "AWS EKS", "Redis"],
    highlights: [
      "Processing 1M+ reviews monthly with <100ms p99 latency",
      "99.95% uptime with automatic failover and recovery",
      "Reduced data inconsistencies by 90% through event sourcing",
      "Implemented real-time quality scoring affecting $50M+ in revenue"
    ],
    status: "completed"
  },
  {
    title: "Multi-Tenant Analytics Platform",
    description: "Real-time analytics platform serving insights to millions of users",
    longDescription: "Designed and implemented a multi-tenant analytics system that aggregates review data and generates actionable insights. Built RESTful and GraphQL APIs with sophisticated caching strategies and query optimization to handle high-traffic loads.",
    technologies: ["TypeScript", "Next.js", "GraphQL", "PostgreSQL", "Redis", "AWS Lambda"],
    highlights: [
      "Serving 10M+ API requests daily",
      "Reduced query response time by 70% through caching",
      "Built comprehensive monitoring with custom Datadog dashboards",
      "Implemented A/B testing framework affecting product decisions"
    ],
    status: "completed"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure-as-Code solution for multi-region AWS deployments",
    longDescription: "Led migration from monolithic infrastructure to modular Terraform configurations. Implemented GitOps workflows with automated testing, security scanning, and progressive deployments across multiple environments.",
    technologies: ["Terraform", "AWS", "EKS", "GitHub Actions", "Helm", "ArgoCD"],
    highlights: [
      "Reduced deployment time from 2 hours to 15 minutes",
      "Zero-downtime deployments with automated rollback",
      "95% cost reduction through resource optimization",
      "Implemented disaster recovery with <5min RTO"
    ],
    status: "completed"
  },
  {
    title: "AI-Powered Code Review Assistant",
    description: "Intelligent code review system using LLMs for automated feedback",
    longDescription: "Building an AI assistant that analyzes pull requests, suggests improvements, detects security vulnerabilities, and ensures code quality standards. Integrates with GitHub and provides contextual feedback based on repository-specific patterns.",
    technologies: ["Python", "OpenAI GPT-4", "LangChain", "FastAPI", "PostgreSQL", "Docker"],
    highlights: [
      "Analyzing 500+ PRs weekly across multiple repositories",
      "Detecting 40+ security issues before production",
      "Reducing code review time by 30%",
      "Training custom models on internal codebase"
    ],
    status: "in-progress",
    github: "https://github.com"
  }
];
*/

// PLACEHOLDER PROJECTS - Currently Active
export const projects: Project[] = [
  {
    title: "Project Coming Soon",
    description: "Exciting new project currently in development",
    longDescription: "This project is currently being developed and will be revealed soon. Stay tuned for updates on this innovative solution.",
    technologies: ["C#", ".NET", "AWS", "Kafka", "PostgreSQL"],
    highlights: [
      "Details will be available soon",
      "Innovative architecture and design",
      "Scalable and production-ready",
      "Following best practices and patterns"
    ],
    status: "in-progress"
  },
  {
    title: "Project Coming Soon",
    description: "Another exciting project in the works",
    longDescription: "This project is currently under development. More information will be shared once it reaches a presentable stage.",
    technologies: ["TypeScript", "Next.js", "AWS", "PostgreSQL"],
    highlights: [
      "Details will be available soon",
      "Modern tech stack",
      "High performance and reliability",
      "Production-grade implementation"
    ],
    status: "in-progress"
  },
  {
    title: "Project Coming Soon",
    description: "New initiative currently being built",
    longDescription: "This project is actively being worked on. Updates and details will be shared as development progresses.",
    technologies: ["Go", "Kubernetes", "AWS", "Redis"],
    highlights: [
      "Details will be available soon",
      "Cloud-native architecture",
      "Enterprise-grade solution",
      "Optimized for scale"
    ],
    status: "in-progress"
  }
];

export const profile = {
  name: "Amin Chouaibi El Azaar",
  title: "Senior Backend Engineer",
  summary: `Passionate about technology, software engineering, and security. My journey started in Barcelona, where curiosity for distributed systems and cloud architecture shaped my career. I believe in building reliable, scalable, and secure systems that empower people and businesses. Technology is not just a tool, but a way to solve real-world problems and create meaningful impact.`,
  location: "Barcelona, Spain",
  interests: ["Distributed Systems", "Cloud Architecture", "Security", "AI", "Open Source"],
  photo: "https://media.licdn.com/dms/image/v2/D4D03AQFifrbYAS7S0g/profile-displayphoto-scale_200_200/B4DZoWWCMfJcAY-/0/1761311467201?e=1763596800&v=beta&t=dIyDiBEsfUcqWsp4jwGb3lPwBwS16jDOQlBCs3aDu_M",
  linkedin: "https://www.linkedin.com/in/amin-chouaibi-el-azaar/",
  github: "https://github.com/aminch18",
  phone: "+34643174896",
  email: "experimentalaminch@outlook.com"
};
