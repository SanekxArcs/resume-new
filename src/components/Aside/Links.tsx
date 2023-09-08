import { Facebook, Github, Link, Linkedin, MessagesSquare, Send } from "lucide-react";
import { Button } from "../ui/button";

const Links = () => {

  const linkData = [
    {
      link: "https://github.com/SanekxArcs",
      name: "github.com/SanekxArcs",
      title: "My web portfolio and real code samples",
      icon: <Github className="mr-2" />,
    },
    {
      link: "https://www.linkedin.com/in/od-/",
      name: "linkedin.com/in/od-/",
      title:
        "My LinkedIn Profile, you can also search in Google 'Oleksandr Dzisiak'",
      icon: <Linkedin className="mr-2" />,
    },
    {
      link: "https://t.me/Sanekx_Arcs",
      name: "t.me/Sanekx_Arcs",
      title:
        "My telegram contact, you can also search use my work number: +48735145620",
      icon: <Send className="mr-2" />,
    },
    {
      link: "https://wa.me/qr/DISE7CCEVP5JJ1",
      name: "wa.me/qr/DISE7CCEVP5JJ1",
      title:
        "My WhatsUp contact, you can also search use my work number: +48735145620",
      icon: <MessagesSquare className="mr-2" />,
    },
    {
      link: "https://m.me/sanekx.arcs",
      name: "m.me/sanekx.arcs",
      title:
        "My facebook Messenger contact, you can also search use my work number: +48735145620",
      icon: <Facebook className="mr-2" />,
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
          className="flex cursor-default select-none"
          title="First links i can share with you you can also google me and find more about me"
        >
          <Link className="mr-2" /> Links
        </h3>
        <div className="flex flex-col items-start justify-start">
          {linkElements}
        </div>
      </div>
    </>
  );
};

export default Links;
