import { School } from "lucide-react";
import { Separator } from "../ui/separator";
import { education } from "./../../db/db.json";

const Education = () => {
  const educationElement = education.map((education, index) => (
    <div key={index}>
      <h4>{education.institution}</h4>
      <p>
        <span className="font-medium">Specialization: </span>
        {education.specialization}
      </p>
    </div>
  ));

  return (
    <section id="education" className="scroll-m-16 cursor-default select-none">
      <h3 className=" flex items-center">
        <School className="mr-2" />
        Education
      </h3>
      <Separator className="my-4" />
      <div className="flex flex-col gap-5">{educationElement}</div>
    </section>
  );
};

export default Education;
