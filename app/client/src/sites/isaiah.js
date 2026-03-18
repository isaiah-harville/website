import {
  Brain,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Star,
  User,
  Wrench,
} from "lucide-react";
import profileImage from "../assets/profile.jpg";

const isaiah = {
  key: "isaiah",
  page: {
    title: "Isaiah Harville | Software Engineer",
    description:
      "Portfolio site for Isaiah Harville, a software engineer focused on reliable systems, practical AI, and Kubernetes-based delivery.",
  },
  identity: {
    displayName: "Isaiah Harville",
    wordmark: "IRH / Portfolio",
    role: "Software Engineer",
    footerName: "Isaiah R. Harville",
  },
  navItems: [
    { id: "about", label: "About", icon: User },
    { id: "highlights", label: "Highlights", icon: Sparkles },
    { id: "strengths", label: "Skills", icon: Star },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ],
  hero: {
    eyebrow: "Systems • ML • Product Engineering",
    name: "Isaiah Harville",
    role: "Software Engineer",
    summary:
      "I build reliable systems, practical AI products, and shipping-focused infrastructure that stays understandable in code review and dependable in production.",
    badges: [
      "M.S. Computer Science @ Georgia Tech",
      "Kubernetes + GitOps",
      "Backend systems + ML tooling",
    ],
    spotlightTitle: "Reliable systems. Thoughtful interfaces. Practical AI.",
    spotlightText:
      "The work I enjoy most sits at the intersection of software craftsmanship, clear product thinking, and infrastructure that does not wobble under load.",
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
  highlights: {
    title: "Featured Projects",
    subtitle: "A few systems and products I am proud to have built.",
    items: [
      {
        id: "sigkit",
        name: "SigKit",
        description:
          "An open-source DSP toolkit with pretrained modulation classification models for Python workflows.",
        highlights: [
          "Reusable PyTorch transforms, datasets, and model utilities for rapid experimentation.",
          "Pretrained checkpoints and docs that make the package useful before a full deep dive.",
        ],
        tags: ["Python", "PyTorch Lightning", "Signal Processing"],
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
          "A hackathon-winning analytics platform for real-time telemetry and live operational visibility.",
        highlights: [
          "Python/FastAPI backend with PostgreSQL for ingest and storage.",
          "TypeScript frontend served through Kubernetes with a GitOps deployment path.",
        ],
        tags: ["Python", "TypeScript", "PostgreSQL", "FastAPI", "Kubernetes"],
        links: [
          {
            label: "Live",
            url: "https://orion.harville.dev",
            icon: ExternalLink,
          },
        ],
      },
      {
        id: "homelab",
        name: "Homelab",
        description:
          "My personal cluster configuration and GitOps flow for networking, observability, and application delivery.",
        highlights: [
          "Declarative Flux workflow for repeatable infrastructure changes.",
          "Real services, real ingress, and the same delivery path this portfolio uses.",
        ],
        tags: ["Kubernetes", "Flux", "Talos", "GitOps"],
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
  strengths: {
    title: "Technical Skills",
    subtitle: "Tools, systems, and domains I work in most often.",
    categories: [
      {
        title: "Software Engineering",
        skills: [
          "Python",
          "C++",
          "Rust",
          "REST APIs",
          "PostgreSQL",
          "CI/CD",
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
        title: "Tools & Delivery",
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
    subtitle:
      "I am always interested in thoughtful product work, strong engineering teams, and interesting infrastructure problems.",
    intro: "Reach out directly at",
    email: "isaiah@harville.dev",
    subjectDefault: "Let's build something thoughtful",
    recipientName: "Isaiah",
    successMessage:
      "Opening your email client so you can send this message to Isaiah.",
  },
  footer: {
    note: "Built with React, Express, and a homelab GitOps pipeline.",
  },
  theme: {
    variables: {
      "--page-bg-top": "#071018",
      "--page-bg-bottom": "#04070c",
      "--nav-bg": "rgba(4, 9, 14, 0.62)",
      "--nav-bg-strong": "rgba(4, 9, 14, 0.86)",
      "--surface": "rgba(10, 19, 28, 0.76)",
      "--surface-soft": "rgba(255, 255, 255, 0.05)",
      "--surface-strong": "#0f1722",
      "--border": "rgba(148, 163, 184, 0.18)",
      "--border-strong": "rgba(125, 211, 252, 0.34)",
      "--text-primary": "#f8fafc",
      "--text-secondary": "#d5dfeb",
      "--text-muted": "#8ca0b3",
      "--accent": "#67e8f9",
      "--accent-strong": "#22d3ee",
      "--pill-bg": "rgba(103, 232, 249, 0.12)",
      "--pill-border": "rgba(103, 232, 249, 0.22)",
      "--pill-text": "#d7fbff",
      "--button-bg": "rgba(255, 255, 255, 0.08)",
      "--button-hover": "rgba(255, 255, 255, 0.14)",
      "--button-border": "rgba(148, 163, 184, 0.24)",
      "--button-text": "#f8fafc",
      "--input-bg": "rgba(5, 9, 15, 0.5)",
      "--focus-ring": "rgba(34, 211, 238, 0.22)",
      "--avatar-bg": "linear-gradient(145deg, rgba(7, 17, 27, 0.95), rgba(13, 25, 36, 0.82))",
      "--footer-bg": "rgba(2, 6, 11, 0.82)",
      "--selection-bg": "rgba(103, 232, 249, 0.22)",
      "--selection-text": "#f8fafc",
      "--scroll-thumb": "rgba(103, 232, 249, 0.38)",
      "--scroll-thumb-hover": "rgba(103, 232, 249, 0.58)",
      "--font-display": '"Fraunces", Georgia, serif',
      "--font-body": '"Manrope", "Avenir Next", sans-serif',
      "--shadow": "0 30px 70px -45px rgba(0, 0, 0, 0.85)",
    },
    backgroundLayers: [
      {
        key: "isaiah-orb-top",
        className:
          "absolute right-[-8rem] top-[-7rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-80",
        style: {
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, rgba(34, 211, 238, 0) 70%)",
        },
      },
      {
        key: "isaiah-orb-left",
        className:
          "absolute left-[-10rem] top-[14rem] h-[24rem] w-[24rem] rounded-full blur-3xl opacity-70",
        style: {
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(56, 189, 248, 0) 72%)",
        },
      },
      {
        key: "isaiah-grid",
        className:
          "absolute inset-x-0 top-0 h-[38rem] opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3rem_3rem]",
      },
    ],
  },
};

export default isaiah;
