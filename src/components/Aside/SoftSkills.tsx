import { MessageCircle } from "lucide-react";

const SoftSkills = () => {
  const softSkillsData: string[] = [
    "Innovative thinking and originality.",
    "Efficient allocation and utilization of time.",
    "Adjusting in different situations.",
    "Optimization of work flow.",
    "Finding fast and good solutions.",
    "Good tasks understanding."
  ];
  const softSkillsElements = softSkillsData.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));


  return (
    <>
      <div className=" cursor-default select-none">
        <h3 className="flex text-2xl font-semibold ">
          {" "}
          <MessageCircle className="mr-2" /> Soft Skills
        </h3>
        <ul className="flex flex-col gap-1 pl-5 text-sm list-disc list-inside px-3">
          {softSkillsElements}
        </ul>
      </div>
    </>
  );
};

export default SoftSkills;
