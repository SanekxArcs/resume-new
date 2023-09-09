import { FileBadge2 } from "lucide-react";

import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const Training = () => {
  const courses = [
    {
      title: "The Ultimate React Course 2023: React, Redux & More",
      platform: "Udemy by Jonas Schmedtmann",
      date: "07.2023",
      badges: [
        "React",
        "Redux",
        "Context API",
        "React Query",
        "Redux Toolkit",
        "Advanced patterns",
      ],
      visibleOnCV: true,
    },
    {
      title: "JavaScript + React - from zero to the result",
      platform: "Udemy by Ivan Petrychenko",
      date: "02.2023",
      badges: [
        "React",
        "JavaScript",
        "REST API",
        "Redux Toolkit",
        "JSON",
        "Firebase",
      ],
      visibleOnCV: true,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      platform: "Udemy by Jonas Schmedtmann",
      date: "10.2022",
      badges: ["JavaScript", "AJAX", "API", "Git", "Parcel", "ES6+"],
      visibleOnCV: true,
    },
    {
      title: "Build a responsive real-world website with HTML and CSS",
      platform: "Udemy by Jonas Schmedtmann",
      date: "09.2022",
      badges: ["HTML", "CSS", "Flexbox", "Grid", "Sass", "Animations"],
      visibleOnCV: true,
    },
    {
      title: "Java Script",
      platform: "Grasshopper by Google",
      date: "07.2022",
      badges: ["JavaScript"],
      visibleOnCV: true,
    },
    {
      title: "HTML, CSS, JS. Professional website layout.",
      platform: "HTML Academy",
      date: "12.2019",
      badges: ["HTML", "CSS"],
      visibleOnCV: true,
    },
    {
      title: "Basics of digital marketing",
      platform: "Digital workshop by Google",
      date: "10.2019",
      badges: ["Marketing", "SEO", "Analyses"],
      visibleOnCV: true,
    },
    {
      title: "Mounting Technician Photovoltaic Systems.",
      platform: "EcoProjekt i CW Lundberg",
      date: "08.2021",
      badges: ["PV-mounting systems"],
      visibleOnCV: false,
    },
    {
      title:
        "Thanks for the special conscientiousness and commitment to everyday work",
      platform: "Piotr Tokarski President GREEN SMART ENERGY sp. k.",
      date: "11.2021",
      badges: ["Honors & Awards"],

      visibleOnCV: false,
    },
  ];

  return (
    <section
      id="certification"
      className="cursor-default select-none scroll-m-16"
    >
      <h3 className="flex items-center">
        <FileBadge2 className="mr-2 " />
        Certificates
      </h3>
      <Separator className="mb-4" />
      <div className="grid gap-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${
              course.visibleOnCV ? "" : "print:hidden"
            } print:last:col-span-2`}
          >
            <h4>{course.title}</h4>
            <h5>{course.platform}</h5>
            <div className="flex flex-wrap gap-1 py-3 pr-10">
              {course.badges.map((element, index) => {
                return (
                  <Badge variant="secondary" key={index}>
                    {element}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
