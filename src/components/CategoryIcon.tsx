import { Code2, Atom, Database, Wrench, BookOpen } from "lucide-react";
import { categories } from "../data/categories";
interface CategoryIconProps {
  icon: string;
  size?: number;
}

function CategoryIcon({ icon, size = 18 }: CategoryIconProps) {
  const category = categories.find((item) => item.id === icon);

  if (!category) return null;

  const iconStyle = {
    color: category.color,
    // backgroundColor: `${category.color}18`, //컬러뒤에 18을 붙이면 연한 배경색 만들수있음
    width: 30,
    height: 30,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  } as const;

  return (
    <span style={iconStyle}>
      {icon === "html-css" && <Code2 size={size} />}
      {icon === "js" && <strong style={{ fontSize: 11 }}>JS</strong>}
      {icon === "react" && <Atom size={size} />}
      {icon === "ts" && <strong style={{ fontSize: 11 }}>TS</strong>}
      {icon === "sql" && <Database size={size} />}
      {icon === "tools" && <Wrench size={size} />}
      {icon === "articles" && <BookOpen size={size} />}
    </span>
  );
}

export default CategoryIcon;
