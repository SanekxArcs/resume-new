import { Computer} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { techs } from "./../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const TechSkills = () => {

  return (
    <>
      <div>
        <SectionWrapper icon={<Computer className="mr-2" />} title="Tech Skills" separator={false}>
          <ul
          className={`flex flex-wrap gap-2 px-3`}
        >
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="cursor-default select-none"
              variant="default"
            >
              {tech}
            </Badge>
          ))}
        </ul>
        </SectionWrapper>
        
      </div>
    </>
  );
};

export default TechSkills;
