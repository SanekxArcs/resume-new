import { Computer } from "lucide-react";
import { Badge } from "@/components/ui/badge";





const TechSkills = () => {
  const techs = [
    "Робота з кадром",
    "Навички композиційного рішення",
    "Вибір вдалого ракурсу",
    "Створення креативних зображень",
    "Налаштування обладнання",
    "Робота зі світлом та схемами світла",
    "Нозробка плану освітлення",
    "Підбір та налаштування світлового обладнання",
    "Створення стилю та концепту",
    "Праця з комбінованими видами зйомки",
    "Праця зі звуком: налаштування та запис аудіо",
    "Монтаж та кольорокорекція відзнятого матеріалу"
  ];

  return (
    <>
      <div>
        <h3
          className="flex justify-start text-2xl font-semibold cursor-default select-none"
          title="This is a relevant tech skills, i real life a have many more other skills"
        >
          <Computer className="mr-2" />
          Навички
        </h3>
        <div className="flex flex-col items-start justify-start gap-2 px-3">
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="cursor-default select-none"
              variant="default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechSkills;
