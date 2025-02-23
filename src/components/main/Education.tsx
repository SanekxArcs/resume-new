import { School,} from "lucide-react";
import { education } from "./../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const Education = () => {
  const educationElement = education.map((education, index) => (
    <div key={index}>
      <h4 className="text-pretty">{education.institution}</h4>
      <p className=" dark:text-white/60">
        <span className="font-medium dark:text-white/80">Specialization: </span>
        {education.specialization}
      </p>
    </div>
  ));

  return (
    <section id="education" className="cursor-default select-none scroll-m-16">
      <SectionWrapper icon={<School className="mr-2" />} title="Education">
        <div
        className={`flex flex-col gap-5`}
      >
        {educationElement}
      </div>
      </SectionWrapper>
    </section>
  );
};

export default Education;
