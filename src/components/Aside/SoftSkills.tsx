import { MessageCircle } from "lucide-react";

const dataSkills = [
  "Налаштування знімального обладнання",
  "Робота з кадром та композицією ",
  "Робота зі світлом , створення малюнку ",
  "Робота з знімальною технікою та освітлювальною технікою",
  "Робота зі звуком",
  "Робота з комбінованими та спеціальними видами зйомки",
  "Монтаж відео , кольорокорекція",
  "Робота з фото обладнення та освітленням",
  "Авторський підхід та обробка знімку",
  "Індивідуальний підхід до кожного проєкту",
];

const SoftSkills = () => {
  const softSkillsElements = dataSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));


  return (
    <>
      <div className="cursor-default select-none ">
        <h3
          className="flex items-center justify-start text-2xl font-semibold"
          title="This is a relevant soft skills, i real life a have many more good skills"
        >
          <MessageCircle className="mr-2" /> Практичні навички
        </h3>
        <ul className="flex flex-col gap-1 pr-3 text-sm list-disc list-outside md:pl-10 pl-7">
          {softSkillsElements}
        </ul>
      </div>
    </>
  );
};

export default SoftSkills;
