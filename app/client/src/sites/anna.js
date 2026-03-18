import {
  BookOpen,
  Heart,
  Mail,
  MessageSquare,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";

const anna = {
  key: "anna",
  page: {
    title: "Anna Harville | Nursing Portfolio",
    description:
      "Portfolio site for Anna Harville, a nursing major focused on compassionate care, patient advocacy, and a warm clinical presence.",
  },
  identity: {
    displayName: "Anna Harville",
    wordmark: "AH / Portfolio",
    role: "Nursing Major",
    footerName: "Anna Harville",
  },
  navItems: [
    { id: "about", label: "About", icon: User },
    { id: "highlights", label: "Journey", icon: Sparkles },
    { id: "strengths", label: "Strengths", icon: Star },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ],
  hero: {
    eyebrow: "Nursing • Compassion • Community",
    name: "Anna Harville",
    role: "Nursing Major",
    summary:
      "I am building a future in nursing around calm communication, patient-centered care, and the small thoughtful details that help people feel safe and seen.",
    badges: [
      "Nursing major",
      "Patient-first mindset",
      "Pink, polished, and people-focused",
    ],
    spotlightTitle: "Care that feels gentle, organized, and human.",
    spotlightText:
      "Anna's portfolio is about service, warmth, professionalism, and the kind of presence that makes hard moments feel a little softer for patients and families.",
    avatar: {
      type: "monogram",
      initials: "AH",
      alt: "Anna Harville monogram",
    },
  },
  socialLinks: [
    {
      name: "Email",
      url: "mailto:agn0006@uah.edu",
      icon: Mail,
    },
  ],
  highlights: {
    title: "Portfolio Highlights",
    subtitle:
      "A look at the values and habits Anna wants to carry into every clinical space she enters.",
    items: [
      {
        id: "care",
        name: "Care With Calm Presence",
        description:
          "Anna is drawn to the steady bedside habits that help patients feel heard, respected, and less overwhelmed.",
        highlights: [
          "Warm communication during stressful moments.",
          "Attention to dignity, comfort, and follow-through.",
          "A patient-first mindset grounded in trust and kindness.",
        ],
        tags: ["Empathy", "Communication", "Reliability"],
      },
      {
        id: "learning",
        name: "Learning With Purpose",
        description:
          "Her academic approach is structured, curious, and focused on turning study into confident practical care.",
        highlights: [
          "Consistent preparation and organized study habits.",
          "Respect for evidence-based practice and clinical safety.",
          "A growth mindset that values humility as much as confidence.",
        ],
        tags: ["Clinical Readiness", "Discipline", "Professional Growth"],
      },
      {
        id: "advocacy",
        name: "Advocacy & Encouragement",
        description:
          "Anna cares about the everyday details that help patients and families feel supported, informed, and included.",
        highlights: [
          "Belief that patient education is part of excellent care.",
          "Family-centered communication and emotional awareness.",
          "A desire to create spaces that feel both safe and uplifting.",
        ],
        tags: ["Patient Education", "Advocacy", "Compassion"],
      },
    ],
  },
  strengths: {
    title: "Strengths In Focus",
    subtitle:
      "The habits and values Anna wants to bring to school, clinical work, and future nursing practice.",
    categories: [
      {
        title: "Care Foundations",
        skills: [
          "Compassionate communication",
          "Active listening",
          "Calm presence",
          "Attention to dignity",
          "Dependability",
        ],
        icon: Heart,
      },
      {
        title: "Academic Rhythm",
        skills: [
          "Structured study habits",
          "Attention to detail",
          "Professionalism",
          "Team collaboration",
          "Curiosity",
        ],
        icon: BookOpen,
      },
      {
        title: "Future Focus",
        skills: [
          "Patient advocacy",
          "Health education",
          "Community wellness",
          "Supportive teamwork",
          "Lifelong learning",
        ],
        icon: Users,
      },
    ],
  },
  contact: {
    title: "Connect With Anna",
    subtitle:
      "For networking, encouragement, or future opportunities, Anna would love to hear from you.",
    intro: "Reach Anna directly at",
    email: "agn0006@uah.edu",
    subjectDefault: "Hello Anna",
    recipientName: "Anna",
    successMessage:
      "Opening your email client so you can send this message to Anna.",
  },
  footer: {
    note: "A soft pink portfolio with a future rooted in care.",
  },
  theme: {
    variables: {
      "--page-bg-top": "#fff8fc",
      "--page-bg-bottom": "#ffe8f3",
      "--nav-bg": "rgba(255, 245, 250, 0.76)",
      "--nav-bg-strong": "rgba(255, 245, 250, 0.92)",
      "--surface": "rgba(255, 255, 255, 0.74)",
      "--surface-soft": "rgba(255, 255, 255, 0.66)",
      "--surface-strong": "#ffffff",
      "--border": "rgba(236, 72, 153, 0.2)",
      "--border-strong": "rgba(219, 39, 119, 0.34)",
      "--text-primary": "#5d1738",
      "--text-secondary": "#7e3759",
      "--text-muted": "#a45e82",
      "--accent": "#ec4899",
      "--accent-strong": "#db2777",
      "--pill-bg": "rgba(236, 72, 153, 0.14)",
      "--pill-border": "rgba(236, 72, 153, 0.24)",
      "--pill-text": "#8d1d56",
      "--button-bg": "rgba(255, 255, 255, 0.78)",
      "--button-hover": "rgba(255, 255, 255, 0.96)",
      "--button-border": "rgba(236, 72, 153, 0.26)",
      "--button-text": "#5d1738",
      "--input-bg": "rgba(255, 255, 255, 0.82)",
      "--focus-ring": "rgba(236, 72, 153, 0.18)",
      "--avatar-bg": "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 222, 238, 0.9))",
      "--footer-bg": "rgba(255, 240, 247, 0.92)",
      "--selection-bg": "rgba(236, 72, 153, 0.18)",
      "--selection-text": "#5d1738",
      "--scroll-thumb": "rgba(236, 72, 153, 0.38)",
      "--scroll-thumb-hover": "rgba(236, 72, 153, 0.58)",
      "--font-display": '"DM Serif Display", Georgia, serif',
      "--font-body": '"Plus Jakarta Sans", "Avenir Next", sans-serif',
      "--shadow": "0 28px 60px -36px rgba(165, 24, 93, 0.28)",
    },
    backgroundLayers: [
      {
        key: "anna-orb-top",
        className:
          "absolute left-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-90",
        style: {
          background:
            "radial-gradient(circle, rgba(244, 114, 182, 0.28) 0%, rgba(244, 114, 182, 0) 68%)",
        },
      },
      {
        key: "anna-orb-right",
        className:
          "absolute right-[-7rem] top-[12rem] h-[24rem] w-[24rem] rounded-full blur-3xl opacity-80",
        style: {
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.16) 0%, rgba(251, 191, 36, 0) 70%)",
        },
      },
      {
        key: "anna-ribbons",
        className:
          "absolute inset-x-0 top-0 h-[36rem] opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.3)_0,rgba(236,72,153,0)_22%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.2)_0,rgba(251,191,36,0)_20%),radial-gradient(circle_at_50%_70%,rgba(244,114,182,0.18)_0,rgba(244,114,182,0)_24%)]",
      },
    ],
  },
};

export default anna;
