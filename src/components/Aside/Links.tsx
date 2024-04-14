import {
  Link,
  Aperture,
  Send,
  Instagram,
} from "lucide-react";

import { Button } from "../ui/button";
import { links } from "./../../db/db.json";

const Links = () => {

   const linkElements = links.map((element, index) => {
     let iconComponent;
     switch (element.icon) {
       case "Instagram":
         iconComponent = <Instagram className="mr-2" />;
         break;
       case "Send":
         iconComponent = <Send className="mr-2" />;
         break;
       case "Aperture":
         iconComponent = <Aperture className="mr-2" />;
         break;
       default:
         iconComponent = null;
         break;
     }
     return (
       <Button key={index} asChild variant="ghost" size="sm">
         <a
           href={element.link}
           target="_blank"
           rel="noopener noreferrer"
           title={element.title}
         >
           {iconComponent}
           {element.name}
         </a>
       </Button>
     );
   });
  
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
