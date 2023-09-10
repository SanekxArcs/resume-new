import { FileBadge2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { courses } from "./../../db/db.json";

const Training = () => {
  const coursesElements = courses.map((course, index) => (
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
  ));

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
      <div className="grid gap-5">{coursesElements}</div>
    </section>
  );
};

export default Training;
