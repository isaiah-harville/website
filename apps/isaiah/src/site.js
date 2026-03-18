import {
  Brain,
  Briefcase,
  Code,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  User,
  Wrench,
} from "lucide-react";
import profileImage from "./assets/profile.jpg";

const site = {
  page: {
    title: "Isaiah Harville | Software Engineer",
    description:
      "Portfolio site for Isaiah Harville, a software engineer focused on reliable systems and practical machine learning tooling.",
  },
  identity: {
    displayName: "Isaiah Harville",
    wordmark: "IRH — Portfolio",
    footerName: "Isaiah R. Harville",
  },
  navItems: [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ],
  hero: {
    name: "Isaiah Harville",
    summary:
      "Software Engineer focused on building reliable systems and products with modern ML tooling.",
    badges: ["M.S. Computer Science @ Georgia Tech"],
    avatar: {
      type: "image",
      src: profileImage,
      alt: "Isaiah Harville - Software Engineer",
    },
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/isaiah-harville",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/isaiahharville",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:isaiah@harville.dev",
      icon: Mail,
    },
  ],
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of my recent work and contributions",
    items: [
      {
        id: "sigkit",
        name: "SigKit",
        description:
          "Open-sourced DSP toolkit offering pre-trained modulation classification models for Python.",
        highlights: [
          "Includes reusable PyTorch transforms, datasets, and a full training pipeline.",
          "Ships with pretrained checkpoints and docs for quick experimentation.",
        ],
        tech: ["Python", "PyTorch Lightning", "Signal Processing"],
        links: [
          {
            label: "Code",
            url: "https://github.com/isaiah-harville/sigkit",
            icon: Github,
          },
          {
            label: "Docs",
            url: "https://isaiah-harville.github.io/SigKit/api/modules.html",
            icon: ExternalLink,
          },
        ],
      },
      {
        id: "orion",
        name: "ORION",
        description:
          "1st Place Winner Hackathon project and real-time analytics tool.",
        highlights: [
          "Live telemetry ingestion with a Python/FastAPI backend and PostgreSQL.",
          "Interactive dashboards built with TypeScript, deployed to Kubernetes.",
        ],
        tech: ["Python", "TypeScript", "PostgreSQL", "FastAPI", "Kubernetes"],
        links: [
          {
            label: "Code",
            url: "https://github.com/isaiah-harville/orion",
            icon: Github,
          },
          {
            label: "Demo",
            url: "https://orion.harville.dev",
            icon: ExternalLink,
          },
        ],
      },
      {
        id: "homelab",
        name: "Homelab",
        description:
          "Personal Kubernetes cluster config powering services, including this site.",
        highlights: [
          "GitOps workflow with Flux and Talos for declarative, repeatable infra.",
          "Automated deployments across monitoring, networking, and media services.",
        ],
        tech: ["Kubernetes", "Docker", "Flux", "GitOps"],
        links: [
          {
            label: "Code",
            url: "https://github.com/isaiah-harville/homelab",
            icon: Github,
          },
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies and tools I work with",
    categories: [
      {
        title: "Software Engineering",
        skills: [
          "Python",
          "C++",
          "Rust",
          "REST APIs",
          "PostgreSQL",
          "CI/CD (DevOps)",
          "gRPC",
          "MongoDB",
        ],
        icon: Code2,
      },
      {
        title: "AI / ML",
        skills: [
          "PyTorch",
          "Adversarial ML",
          "Reinforcement Learning",
          "Computer Vision",
          "Deep Learning",
          "MLFlow",
          "Weights & Biases",
          "Kubeflow",
        ],
        icon: Brain,
      },
      {
        title: "Tools & Deployment",
        skills: [
          "Docker",
          "Kubernetes",
          "Flux",
          "Talos",
          "Linux",
          "Terraform",
          "GitOps",
        ],
        icon: Wrench,
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    subtitle: "I'm always interested in new opportunities and collaborations.",
    intro: "Feel free to reach out directly at",
    email: "isaiah@harville.dev",
    subjectDefault: "Let's connect",
    subjectPlaceholder: "What would you like to discuss?",
    recipientName: "Isaiah",
    successMessage: "Opening your email client so you can send this message.",
  },
  theme: {
    page: "bg-[#0a0b0f] text-gray-100",
    nav: {
      border: "border-gray-800",
      idle: "bg-black/60",
      scrolled: "bg-black/80 shadow-lg",
      title: "text-gray-100",
      item: "text-gray-300 hover:text-white hover:bg-white/10 hover:border-gray-700",
      mobileButton: "text-white",
    },
    hero: {
      avatarFrame:
        "border-gray-800 bg-[#0f1117] shadow-[0_15px_40px_-25px_rgba(0,0,0,0.7)]",
      avatarMonogram: "bg-[#0f1117] text-gray-100",
      name: "text-white",
      summary: "text-gray-300",
      badge: "bg-white/5 border-gray-800 text-gray-300",
    },
    sectionTitle: "text-white",
    sectionSubtitle: "text-gray-300",
    card: "bg-[#0f1117] border-gray-800 hover:border-gray-700 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.8)]",
    cardTitle: "text-white group-hover:text-gray-100",
    bodyText: "text-gray-300",
    bodyTextStrong: "text-gray-200",
    tag: "bg-white/5 text-gray-200 border-gray-700",
    bullet: "bg-gray-500",
    iconBox: "bg-white/5 border-gray-800 group-hover:border-gray-700",
    iconColor: "text-gray-200",
    link: "text-gray-100 hover:text-white",
    input:
      "bg-black/40 border-gray-800 text-white placeholder-gray-500 focus:ring-gray-500 focus:border-gray-700",
    primaryButton:
      "bg-white/5 hover:bg-white/10 border-gray-800 hover:border-gray-700 text-white",
    secondaryButton:
      "bg-white/10 hover:bg-white/20 border-gray-800 hover:border-gray-700 text-white",
    success: "bg-white/5 text-gray-200 border-gray-800",
    socialIcon:
      "bg-white/5 text-gray-300 border-gray-800 hover:border-gray-700 hover:text-white hover:bg-white/10",
    socialButton:
      "bg-white/5 text-gray-200 border-gray-800 hover:border-gray-700 hover:bg-white/10",
    footer: "border-gray-800 bg-black",
    footerText: "text-gray-400",
    sectionAlt: "bg-black/20",
  },
};

export default site;
