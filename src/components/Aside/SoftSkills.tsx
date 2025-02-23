import { MessageCircle } from "lucide-react";
import { softSkills } from "./../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const SoftSkills = () => {
  const softSkillsElements = softSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));

  return (
    <>
      <div className="cursor-default select-none ">
        <SectionWrapper
          icon={<MessageCircle className="mr-2" />}
          title="Soft Skills"
          separator={false}
        >        
        <ul
          className={`flex flex-col gap-1 px-3 pl-5 text-sm list-disc list-inside`}
        >
          {softSkillsElements}
        </ul>
        </SectionWrapper>


      </div>
    </>
  );
};

export default SoftSkills;
