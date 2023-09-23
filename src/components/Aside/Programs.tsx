import { Computer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { techs } from "../../db/db.json";

const Programs = () => {
  return (
    <>
      <div>
        <h3
          className="flex justify-start text-2xl font-semibold cursor-default select-none"
          title="This is a relevant tech skills, i real life a have many more other skills"
        >
          <Computer className="mr-2" />
          Програми
        </h3>
        <div className="flex flex-col items-start justify-start gap-2 px-3">
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="cursor-default select-none"
              variant="default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default Programs;
