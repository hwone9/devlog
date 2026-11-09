export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  backgroundColor: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "html-css",
    name: "HTML & CSS",
    description: "Structure, layout, and visual presentation.",
    color: "#D94D25",
    backgroundColor: "#FFF0E9",
    icon: "html-css",
  },
  {
    id: "js",
    name: "JavaScript",
    description: "Language fundamentals and practical patterns.",
    color: "#A78300",
    backgroundColor: "#EAF2FF",
    icon: "typescript",
  },
  {
    id: "react",
    name: "React",
    description: "Components, state, and building user interfaces.",
    color: "#159BB8",
    backgroundColor: "#E5F8FC",
    icon: "react",
  },
  {
    id: "ts",
    name: "TypeScript",
    description: "Types that make JavaScript easier to maintain.",
    color: "#3178C6",
    backgroundColor: "#E5F8FC",
    icon: "react",
  },
  {
    id: "sql",
    name: "SQL",
    description: "Queries, relational data, and database concepts.",
    color: "#4479A1",
    backgroundColor: "#E5F8FC",
    icon: "react",
  },
  {
    id: "tools",
    name: "Tools",
    description: "Git, terminal, and everyday developer tools.",
    color: "#7956B3",
    backgroundColor: "#E5F8FC",
    icon: "react",
  },
  {
    id: "articles",
    name: "Articles",
    description: "Scraped development-related articles.",
    color: "#34865B",
    backgroundColor: "#E5F8FC",
    icon: "react",
  },
];
