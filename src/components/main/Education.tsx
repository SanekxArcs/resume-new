
import { School } from "lucide-react";
import { Separator } from "../ui/separator";

const Education = () => {
  const educationData = [
    {
      institution:
        'National Technikal University of Ukraine "Igor Sikorsky Kyiv Politechnic Institute"',
      specialization: "Electrikal Engineering and Electrotechnics",
    },
    {
      institution: "Kyiv College of Energy Politechnic Institute",
      specialization:
        "Maintenance of automated power equipment in power plants",
    },
  ];

  return (
    <section id="education" className="scroll-m-16 cursor-default select-none">
      <h3 className=" flex items-center">
        <School className="mr-2" />
        Education
      </h3>
      <Separator className="my-4" />
      <div className="flex flex-col gap-5">
        {educationData.map((education, index) => (
          <div key={index}>
            <h4>{education.institution}</h4>
            <p>
              <span className="font-medium">Specialization: </span>
              {education.specialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
