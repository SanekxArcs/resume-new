import { Briefcase, Building, Building2, CalendarClock, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { workExperience } from './../../db/db.json'

const WorkExperience = () => {
  return (
    <section id="work" className="cursor-default select-none scroll-m-16 px-1">
      <h3 className="flex items-center justify-start w-full py-4">
        <Building2 className="mr-2" />
        Досвід роботи
      </h3>
      <Separator className="mb-4" />

      <ol className="relative border-l border-gray-200 ">
        {WorkExperienceElements}
      </ol>
    </section>
  );
};

export default WorkExperience;


const WorkExperienceElements = workExperience.map((elem, index) => {
 return (
   <li key={index} className={`mb-10 print:mb-5 ml-6`}>
     <span className="absolute z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary/40 dark:bg-primary -left-3 ring-8 ring-background">
       <Briefcase className="w-3 h-3 dark:text-background" />
     </span>
       <h4 className="flex items-center text-lg font-semibold text-primary">
         {elem.jobTitle}
       </h4>
     {elem.companyName? <h5 className="flex items-center mb-1">
       <Building className="w-5 h-5 mr-2 " />
       {elem.companyName}
     </h5> : ""}

     <time className="flex items-center mb-2 text-sm font-normal leading-none  ">
       <CalendarClock className="w-4 h-4 mr-2 " />
       {elem.duration}
     </time>
     <p className={`${elem.print ? "print:hidden" : ""} text-sm`}>
       Короткий опис:
     </p>
     <ul
       className={`${
         elem.print ? "print:hidden" : ""
       } pl-3 mb-1 text-base font-normal  list-disc`}
     >
       {elem.description.map((item, i) => (
         <li key={i} className={`${elem.print ? "print:hidden" : ""}`} >
           {item}
         </li>
       ))}
     </ul>
     {elem.website ? (
       <Button asChild variant="link" size="sm">
         <a href={elem.website} target="_blank">
           <ExternalLink className="w-4 h-4 mr-2" />
           {elem.websiteName}
         </a>
       </Button>
     ) : (
       ""
     )}
   </li>
 );
});