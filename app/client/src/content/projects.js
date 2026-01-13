export const featuredProjects = [
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
    github: "https://github.com/isaiah-harville/sigkit",
    demo: "https://isaiah-harville.github.io/SigKit/api/modules.html",
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
    github: "https://github.com/isaiah-harville/orion",
    demo: "https://orion.harville.dev",
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
    github: "https://github.com/isaiah-harville/homelab",
  },
];

export default featuredProjects;
