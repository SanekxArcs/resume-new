import { Facebook, Github, Link, Linkedin, MessagesSquare, Send } from "lucide-react";
import { Button } from "../ui/button";
import linksData from "../../db/db.json";
import { SectionWrapper } from "../ui/section-wrapper";

const Links = () => {
  const iconComponents = {
    Github,
    Linkedin,
    Send,
    MessagesSquare,
    Facebook,
  };

  const linkElements = linksData.links.map((element, index) => {
    const IconComponent = iconComponents[element.iconName as keyof typeof iconComponents];
    
    return (
      <Button key={index} asChild variant="ghost" size="sm">
        <a
          href={element.link}
          target="_blank"
          rel="noopener noreferrer"
          title={element.title}
        >
          <IconComponent className="mr-2" />
          {element.name}
        </a>
      </Button>
    );
  });
  
  return (
    <>
      <div className="break-before-avoid">
        <SectionWrapper icon={<Link className="mr-2" />} title="Links" separator={false}>
          <div
          className={`flex flex-col items-start justify-start`}
        >
          {linkElements}
        </div>
        </SectionWrapper>
        
      </div>
    </>
  );
};

export default Links;
