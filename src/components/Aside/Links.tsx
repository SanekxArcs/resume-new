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
      link: "https://www.instagram.com/marseli_mm/",
      name: "@marseli_mm",
      title: "My Instagram Profile, you can also search in Google",
      icon: <Instagram className="mr-2" />,
    },
    {
      link: "https://t.me/maRrrgaritaaaa",
      name: "t.me/maRrrgaritaaaa",
      title: "My telegram contact",
      icon: <Send className="mr-2" />,
    },
    {
      link: "https://www.behance.net/margaritkachuk",
      name: "behance.net/margaritkachuk",
      title: "My behance contact",
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
          title="First links i can share with you you can also google me and find more about me"
        >
          <Link className="mr-2" /> Силки
        </h3>
        <div className="flex flex-col items-start justify-start">
          {linkElements}
        </div>
      </div>
    </>
  );
};

export default Links;
