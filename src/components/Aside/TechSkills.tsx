import { Computer } from "lucide-react";
import { Badge } from "@/components/ui/badge";





const TechSkills = () => {
  const techs = [
    "HTML",
    "CSS",
    "SASS/LESS",
    "Responsive",
    "Adaptive",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Vite",
    "Next.js",
    "Redux",
    "REST API",
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
        <h3
          className="flex text-2xl font-semibold cursor-default select-none"
          title="This is a relevant tech skills, i real life a have many more other skills"
        >
          <Computer className="mr-2" />
          Tech Skills
        </h3>
        <ul className="flex flex-wrap gap-2 px-3">
          {techs.map((tech , index) => (
            <Badge key={index} className="cursor-default select-none" variant="default">
              {tech}
            </Badge>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechSkills;
