import { Brain, Code2, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Software Engineering",
    skills: [
      "Python",
      "C++",
      "Rust",
      "REST APIs",
      "PostgreSQL",
      "CI/CD (DevOps)",
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
      "Git",
      "Docker",
      "Kubernetes",
      "Flux",
      "Talos",
      "Linux",
      "gRPC",
      "GitOps",
    ],
    icon: Wrench,
  },
];

export default skillCategories;
