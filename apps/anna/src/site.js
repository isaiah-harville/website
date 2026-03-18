import {
  BookOpen,
  Heart,
  Mail,
  MessageSquare,
  Sparkles,
  User,
  Users,
} from "lucide-react";

const site = {
  page: {
    title: "Anna Harville | Nursing Portfolio",
    description:
      "Portfolio site for Anna Harville, a nursing major focused on compassionate care, patient advocacy, and a warm clinical presence.",
  },
  identity: {
    displayName: "Anna Harville",
    wordmark: "AH — Portfolio",
    footerName: "Anna Harville",
  },
  navItems: [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Highlights", icon: Sparkles },
    { id: "experience", label: "Strengths", icon: Heart },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ],
  hero: {
    name: "Anna Harville",
    summary:
      "Nursing major focused on compassionate care, calm communication, and helping patients feel supported and seen.",
    badges: ["Nursing Major @ UAH"],
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
  projects: {
    title: "Nursing Highlights",
    subtitle:
      "A few of the values and habits Anna wants to bring into every clinical setting.",
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
        tech: ["Empathy", "Communication", "Reliability"],
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
        tech: ["Clinical Readiness", "Discipline", "Professional Growth"],
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
        tech: ["Patient Education", "Advocacy", "Compassion"],
      },
    ],
  },
  skills: {
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
    title: "Let's Connect",
    subtitle:
      "For networking, encouragement, or future opportunities, Anna would love to hear from you.",
    intro: "Feel free to reach out directly at",
    email: "agn0006@uah.edu",
    subjectDefault: "Hello Anna",
    subjectPlaceholder: "What would you like to discuss?",
    recipientName: "Anna",
    successMessage: "Opening your email client so you can send this message.",
  },
  theme: {
    page: "bg-[#fff7fb] text-rose-950",
    nav: {
      border: "border-pink-200",
      idle: "bg-white/80",
      scrolled:
        "bg-white/95 shadow-[0_10px_30px_-20px_rgba(190,24,93,0.25)]",
      title: "text-rose-900",
      item: "text-rose-700 hover:text-rose-900 hover:bg-pink-100/80 hover:border-pink-200",
      mobileButton: "text-rose-900",
    },
    hero: {
      avatarFrame:
        "border-pink-200 bg-white shadow-[0_15px_40px_-25px_rgba(190,24,93,0.18)]",
      avatarMonogram:
        "bg-gradient-to-br from-pink-100 via-rose-50 to-white text-rose-700",
      name: "text-rose-900",
      summary: "text-rose-700",
      badge: "bg-pink-100/70 border-pink-200 text-rose-700",
    },
    sectionTitle: "text-rose-900",
    sectionSubtitle: "text-rose-700",
    card:
      "bg-white/85 border-pink-200 hover:border-pink-300 hover:shadow-[0_20px_45px_-30px_rgba(190,24,93,0.24)]",
    cardTitle: "text-rose-900 group-hover:text-rose-700",
    bodyText: "text-rose-700",
    bodyTextStrong: "text-rose-800",
    tag: "bg-pink-100/70 text-rose-700 border-pink-200",
    bullet: "bg-pink-400",
    iconBox: "bg-pink-50 border-pink-200 group-hover:border-pink-300",
    iconColor: "text-rose-700",
    link: "text-rose-700 hover:text-rose-900",
    input:
      "bg-white border-pink-200 text-rose-900 placeholder-rose-300 focus:ring-pink-300 focus:border-pink-300",
    primaryButton:
      "bg-pink-100 hover:bg-pink-200 border-pink-200 hover:border-pink-300 text-rose-900",
    secondaryButton:
      "bg-white hover:bg-pink-50 border-pink-200 hover:border-pink-300 text-rose-900",
    success: "bg-pink-50 text-rose-700 border-pink-200",
    socialIcon:
      "bg-white text-rose-700 border-pink-200 hover:border-pink-300 hover:text-rose-900 hover:bg-pink-50",
    socialButton:
      "bg-white text-rose-700 border-pink-200 hover:border-pink-300 hover:text-rose-900 hover:bg-pink-50",
    footer: "border-pink-200 bg-white/80",
    footerText: "text-rose-600",
    sectionAlt: "bg-pink-100/40",
  },
};

export default site;
