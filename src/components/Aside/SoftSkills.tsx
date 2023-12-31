import { MessageCircle } from "lucide-react";
import { softSkills } from '../../db/db.json'

const SoftSkills = () => {
  const softSkillsElements = softSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));


  return (
    <>
      <div className="cursor-default select-none ">
        <h3
          className="flex items-center justify-start text-2xl font-semibold"
          title="This is a relevant soft skills, i real life a have many more good skills"
        >
          <MessageCircle className="mr-2" /> Soft Skills
        </h3>
        <ul className="flex flex-col gap-1 px-3 pl-5 text-sm list-disc list-inside">
          {softSkillsElements}
        </ul>
      </div>
    </>
  );
};

export default SoftSkills;
