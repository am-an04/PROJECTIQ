// src/modules/recommendation/recommendation.data.ts

import { TechnologyRecommendation } from "./recommendation.types.js";

export interface DomainKnowledge {
  domain: string;
  keywords: string[];
  technologies: TechnologyRecommendation[];
}

export const DOMAIN_KNOWLEDGE_BASE: DomainKnowledge[] = [
  {
    domain: "Web Development",
    keywords: [
      "website",
      "web",
      "frontend",
      "backend",
      "dashboard",
      "portal",
      "browser",
      "responsive",
    ],
    technologies: [
      {
        type: "Language",
        name: "TypeScript",
        confidence: 95,
        reasoning: {
          selectedBecause: [
            "Static type checking",
            "Better maintainability",
            "Excellent IDE support",
          ],
          weaknesses: [
            "Requires compilation",
            "Learning curve for beginners",
          ],
          rejectedAlternatives: [
            {
              technology: "JavaScript",
              reason: "Lacks static typing for large applications.",
            },
          ],
        },
      },
      {
        type: "Framework",
        name: "React",
        confidence: 96,
        reasoning: {
          selectedBecause: [
            "Reusable components",
            "Large ecosystem",
            "Industry standard",
          ],
          weaknesses: [
            "Needs additional libraries for complete solutions",
            "State management becomes complex in large projects",
          ],
          rejectedAlternatives: [
            {
              technology: "Angular",
              reason: "Steeper learning curve.",
            },
            {
              technology: "Vue",
              reason: "Smaller enterprise adoption.",
            },
          ],
        },
      },
      {
        type: "Database",
        name: "MongoDB",
        confidence: 92,
        reasoning: {
          selectedBecause: [
            "Flexible schema",
            "Fast development",
          ],
          weaknesses: [
            "Complex joins are harder",
            "Schema discipline is developer-dependent",
          ],
          rejectedAlternatives: [
            {
              technology: "MySQL",
              reason: "Less flexible for rapidly evolving schemas.",
            },
          ],
        },
      },
      {
        type: "Cloud",
        name: "AWS",
        confidence: 93,
        reasoning: {
          selectedBecause: [
            "Highly scalable",
            "Largest cloud ecosystem",
          ],
          weaknesses: [
            "Can become expensive",
            "Large learning curve",
          ],
          rejectedAlternatives: [
            {
              technology: "Azure",
              reason: "AWS has broader service maturity.",
            },
          ],
        },
      },
    ],
  },

  {
    domain: "Artificial Intelligence",
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "prediction",
      "classification",
      "computer vision",
      "nlp",
    ],
    technologies: [
      {
        type: "Language",
        name: "Python",
        confidence: 99,
        reasoning: {
          selectedBecause: [
            "Largest AI ecosystem",
            "Easy to learn",
            "Rich ML libraries",
          ],
          weaknesses: [
            "Slower than compiled languages",
            "Higher memory usage",
          ],
          rejectedAlternatives: [
            {
              technology: "Java",
              reason: "Smaller AI ecosystem.",
            },
          ],
        },
      },
      {
        type: "Framework",
        name: "FastAPI",
        confidence: 95,
        reasoning: {
          selectedBecause: [
            "Excellent performance",
            "Automatic API documentation",
          ],
          weaknesses: [
            "Smaller ecosystem than Express",
          ],
          rejectedAlternatives: [
            {
              technology: "Flask",
              reason: "Lower performance for larger APIs.",
            },
          ],
        },
      },
      {
        type: "AI Model",
        name: "PyTorch",
        confidence: 96,
        reasoning: {
          selectedBecause: [
            "Research friendly",
            "Dynamic computation graph",
          ],
          weaknesses: [
            "Slightly larger deployment size",
          ],
          rejectedAlternatives: [
            {
              technology: "TensorFlow",
              reason: "PyTorch is widely preferred for research.",
            },
          ],
        },
      },
    ],
  },

  {
    domain: "Mobile Development",
    keywords: [
      "android",
      "ios",
      "mobile",
      "flutter",
      "react native",
      "apk",
      "play store",
    ],
    technologies: [
      {
        type: "Framework",
        name: "Flutter",
        confidence: 95,
        reasoning: {
          selectedBecause: [
            "Single codebase",
            "Excellent UI",
          ],
          weaknesses: [
            "Larger application size",
          ],
          rejectedAlternatives: [
            {
              technology: "React Native",
              reason: "Flutter provides more consistent rendering.",
            },
          ],
        },
      },
    ],
  },

  {
    domain: "Cybersecurity",
    keywords: [
      "security",
      "cyber",
      "malware",
      "phishing",
      "encryption",
      "authentication",
      "network",
    ],
    technologies: [
      {
        type: "Language",
        name: "Python",
        confidence: 94,
        reasoning: {
          selectedBecause: [
            "Excellent scripting capabilities",
            "Rich security libraries",
          ],
          weaknesses: [
            "Not ideal for every low-level security application",
          ],
          rejectedAlternatives: [
            {
              technology: "PHP",
              reason: "Rarely used for security tooling.",
            },
          ],
        },
      },
    ],
  },

  {
    domain: "Data Science",
    keywords: [
      "data",
      "analytics",
      "visualization",
      "statistics",
      "dataset",
      "pandas",
    ],
    technologies: [
      {
        type: "Language",
        name: "Python",
        confidence: 98,
        reasoning: {
          selectedBecause: [
            "Rich data science ecosystem",
            "Excellent community support",
          ],
          weaknesses: [
            "Can be slower for compute-intensive tasks",
          ],
          rejectedAlternatives: [
            {
              technology: "R",
              reason: "Python offers broader ecosystem integration.",
            },
          ],
        },
      },
      {
        type: "Tool",
        name: "Jupyter Notebook",
        confidence: 96,
        reasoning: {
          selectedBecause: [
            "Interactive experimentation",
            "Excellent visualization support",
          ],
          weaknesses: [
            "Not suitable for production deployment",
          ],
          rejectedAlternatives: [
            {
              technology: "Google Colab",
              reason: "Notebook provides better local development flexibility.",
            },
          ],
        },
      },
    ],
  },
];