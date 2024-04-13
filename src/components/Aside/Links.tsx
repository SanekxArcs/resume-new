import {
  Link,
  Aperture,
  Send,
  Instagram,
} from "lucide-react";
import { Button } from "../ui/button";

const Links = () => {

  const linkData = [
    {
      link: "https://www.instagram.com/_margomti_tkachuk_/",
      name: "@_margomti_tkachuk_",
      title: "Мій профіль в Instagram. Також можете знайти у Google.",
      icon: <Instagram className="mr-2" />,
    },
    {
      link: "https://t.me/marrgori",
      name: "t.me/marrgori",
      title: "Мій контакт у Telegram",
      icon: <Send className="mr-2" />,
    },
    {
      link: "https://www.behance.net/margaritkachuk",
      name: "behance.net/margaritkachuk",
      title: "My Behance contact",
      icon: <Aperture className="mr-2" />,
    },
  ];

  const linkElements = linkData.map((element, index) => {
    return (
      <Button key={index} asChild variant="ghost" size="sm">
        <a
          href={element.link}
          target="_blank"
          rel="noopener noreferrer"
          title={element.title}
        >
          {element.icon}
          {element.name}
        </a>
      </Button>
    );
  })
  
  return (
    <>
      <div className="break-before-avoid">
        <h3
          className="flex items-center justify-start cursor-default select-none "
          title="Перші посилання, які я можу поділитися з вами, ви також можете мене знайти в Google та дізнатися більше про мене"
        >
          <Link className="mr-2" /> Посилання
        </h3>
        <div className="flex flex-col items-start justify-start">
          {linkElements}
        </div>
      </div>
    </>
  );
};

export default Links;
