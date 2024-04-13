import { MessageCircle } from "lucide-react";
import { practikalSkills } from "./../../db/db.json";

const PractikalSkills = () => {
  const softSkillsElements = practikalSkills.map((skill: string, index: number) => (
    <li key={index}>{skill}</li>
  ));

  return (
    <>
      <div className="cursor-default select-none">
        <h3
          className="flex items-center justify-start text-2xl font-semibold"
          title="These are relevant practical skills; I have many more in real life."
        >
          <MessageCircle className="mr-2" /> Практичні навички
        </h3>
        <ul className="flex flex-col gap-1 pr-3 text-sm list-disc list-outside md:pl-10 pl-7">
          {softSkillsElements}
        </ul>
      </div>
    </>
  );
};

export default PractikalSkills;
