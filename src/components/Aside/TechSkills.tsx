import { Computer } from "lucide-react";
import { Badge } from "@/components/ui/badge";





const TechSkills = () => {
  const techs = [
    "HTML",
    "CSS",
    "SASS/LESS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Redux",
    "Vite",
    "Next.js",
    "Git/GitHub",
    "Firebase",
    "Figma",
    "Photoshop",
    "AI",
    "Other ...",
  ];

  return (
    <>
      <div>
        <h3 className="flex text-2xl font-semibold">
          <Computer className="mr-2" />
          Tech Skills
        </h3>
        <ul className="flex flex-wrap gap-2 px-3">
          {techs.map((tech) => (
            <Badge className="cursor-default select-none" variant="default">{tech}</Badge>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechSkills;
