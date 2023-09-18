import { ExternalLink, FileBadge2 } from "lucide-react";
import { Button } from "../ui/button";


const courses = [
  {
    title: "Працюю над власним курсом по фотографіі",
    description: "",
  },
  
  {
    title: "Сформувала свій власний стиль та підхід до зйомок ",
    description: "",
  },
  {
    title:
      "Запускаю з нуля проєкт для кієв Kiev Logistics Metaps у ролі головного оператора та креативного продюсера",
    description: "",
  },
  
  {
    title:
      "Проходила стажування у відомого українського оператора - Ярослава Пілунського",
    description: "",
  },
  {
    title:
      "У 23 роки дебютовала у ролі головного оператора-постановника фільму  'Фелікс'",
    description: "",
  },
  {
    title:
      "Працювала у команді з іноземним режиссером сценічного бою відомих фільмів Ронін Трейнор у якості оператора ",
    description: "",
    link: "https://www.instagram.com/reel/CK7GoO9Aqto/",
  },
  {
    title: "Провела перший майстер-клас по фотографії",
    description: "",
    link: "https://facebook.com/story.php?story_fbid=pfbid02XPjCJvB3dKvXfMtrtyisv58Mg29fbfkzvgSz6GL56WFqcsEubHpw5QKTyv5r51a7l&id=100070183386933&mibextid=qC1gEa",
  },
  {
    title:
      "На замовлення мін соц разом з  Golden Taurus Production , серія відео на соціальну тему протидій торгівлі людьми",
    description: "",
    link: "https://www.instagram.com/reel/COdpg43h45v/",
  },
];

const Training = () => {
  const coursesElements = courses.map((course, index) => (
    <li key={index}>
      <p className="text-sm">{course.title}</p>
      {course.description ? <p>{course.description}</p> : ""}
      
      {course.link ? <Button asChild variant="link"><a className="flex items-center justify-start " href={course.link}><ExternalLink className="w-3 h-3 mr-1"/> Детальніше</a></Button> : ""}
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

export default Training;
