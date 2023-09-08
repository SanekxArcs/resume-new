import { Facebook, Github, Link, Linkedin, MessagesSquare, Send } from "lucide-react";
import { Button } from "../ui/button";

const Links = () => {
  return (
    <>
      <div className="break-before-avoid">
        <h3 className="flex cursor-default select-none">
          <Link className="mr-2" /> Links
        </h3>
        <div className="flex flex-col items-start justify-start">
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://github.com/SanekxArcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-4 h-4" />
              GitHub Profile
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://www.linkedin.com/in/od-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://t.me/Sanekx_Arcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="mr-2 w-4 h-4" />
              Telegram
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://wa.me/qr/DISE7CCEVP5JJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessagesSquare className="mr-2 w-4 h-4" /> WhatsUp
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a
              href="https://m.me/sanekx.arcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="mr-2 w-4 h-4" />
              Meta Messenger
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Links;
