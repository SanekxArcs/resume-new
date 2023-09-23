import { ExternalLink, FileBadge2 } from "lucide-react";
import { Button } from "../ui/button";
import { success } from "./../../db/db.json";


const Success = () => {
  const coursesElements = success.map((course, index) => (
    <li key={index}>
      <p className="text-sm">{course.title}</p>
      {course.link ? (
        <Button asChild variant="link">
          <a className="flex items-center justify-start " href={course.link}>
            <ExternalLink className="w-3 h-3 mr-1" /> Детальніше
          </a>
        </Button>
      ) : (
        ""
      )}
    </li>
  ));

  return (
    <section
      id="certification"
      className="cursor-default select-none scroll-m-16"
    >
      <h3 className="flex items-center">
        <FileBadge2 className="mr-2 " />
        Досягнення
      </h3>
      <ul className="flex flex-col gap-1 pr-3 text-sm list-disc list-outside md:pl-10 pl-7">
        {coursesElements}
      </ul>
    </section>
  );
};

export default Success;
