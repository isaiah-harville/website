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
];

export default skillCategories;
