export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  roleType: "Technical Team" | "Education" | "Internship";
  description: string;
  tags: string[];
  metrics?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "vit-robotics",
    title: "Student Member – Robotics & Technical Teams",
    organization: "VIT Vellore",
    date: "Present",
    roleType: "Technical Team",
    description:
      "Core member of the Robotics Club, contributing to electrical/mechanical design, embedded prototyping, and technical discussions. Handled hardware-software integration through practical workshops and cross-functional projects. Active team member of VIT Hexabot – Team Artemis, engineering multi-degree-of-freedom solutions and control loops for competitive robotics.",
    tags: ["Hardware-Software Integration", "Prototyping", "Team Artemis", "Kinematics", "Microcontrollers"],
  },
  {
    id: "vit-education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Vellore Institute of Technology (VIT Vellore)",
    date: "2025 – Present",
    roleType: "Education",
    description:
      "Maintaining a strong 8.5 CGPA with coursework focused on advanced Data Structures & Algorithms, Object-Oriented Systems Design, Database Management, and Computer Architecture.",
    metrics: "Current CGPA: 8.5 / 10.0",
    tags: ["C++", "Java", "Python", "Data Structures", "System Design"],
  },
];
