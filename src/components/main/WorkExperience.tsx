import { Briefcase, Building, Building2, CalendarClock, ExternalLink, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { workExperience } from './../../db/db.json'
import { SectionWrapper } from "../ui/section-wrapper";

const WorkExperienceElements = workExperience.map((elem, index) => {
 return (
   <li key={index} className={`mb-10 print:mb-5 ml-6`}>
     <span className="absolute z-10 flex items-center justify-center w-6 h-6 rounded-full bg-primary/40 dark:bg-primary -left-3 ring-8 ring-background">
       <Briefcase className="w-3 h-3 text-inherit" />
     </span>
     {elem.jobTitle2 ? (
       <h4 className="sticky flex flex-wrap items-center text-lg font-semibold top-16 text-primary backdrop-blur-md">
         <span className="text-sm font-light">&nbsp;from&nbsp;</span>
         {elem.jobTitle}
         <span className="text-sm font-light">&nbsp;to&nbsp;</span>
         {elem.jobTitle2}
       </h4>
     ) : (
       <h4 className="sticky flex items-center text-lg font-semibold text-primary top-16 backdrop-blur-md">
         {elem.jobTitle}
       </h4>
     )}
     <h5 className="flex items-center mb-1">
       <Building className="w-5 h-5 mr-2 " />
       {elem.companyName}
     </h5>
     {elem.location ? (
       <h6 className="flex items-center mb-1">
         <MapPin className="w-5 h-5 mr-2 " />
         {elem.location}
       </h6>
     ) : (
       ""
     )}

     <time className="flex items-center mb-2 text-sm font-normal leading-none ">
       <CalendarClock className="w-4 h-4 mr-2 " />
       {elem.duration}
     </time>
     <p className={`${elem.print ? "print:hidden" : ""} text-sm`}>
       Short job description:
     </p>
     <ul
       className={`${
         elem.print ? "print:hidden" : ""
       } pl-3 mb-1 text-base font-normal text-balance list-disc `}
     >
       {elem.description.map((item, i) => (
         <li
           className={`${elem.print ? "print:hidden" : ""} text-balance`}
           key={i}
         >
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

const WorkExperience = () => {
  return (
    <section id="work" className="cursor-default select-none scroll-m-16">
      <SectionWrapper
        icon={<Building2 className="mr-2" />}
        title="Work experience"
      >
        <ol className="relative border-l border-gray-200 ">
          {WorkExperienceElements}
        </ol>
      </SectionWrapper>
    </section>
  );
};

export default WorkExperience;
