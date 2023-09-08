import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Contact, Menu, Save } from "lucide-react";
import profilePhoto from "./../assets/ProfilePhoto.webp";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ opacity: 0, scale: 0.3, y: -200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`container print:hidden mx-auto px-4 sticky top-2 m-2 rounded-md bg-gradient-to-br w-full flex items-center justify-between from-primary/10 to-primary/70 backdrop-blur-md h-14 z-50`}
        >
          <div className="flex gap-2">
            <img className="w-10 h-10" src={profilePhoto} alt="profilePhoto" />

            <div className="flex flex-col items-start justify-center">
              <h1 className="font-black">Oleksandr Dzisiak</h1>
              <h2 className="text-sm text-muted-foreground">
                Frontend Developer
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 w-fit">
            <div className="hidden sm:block">
              <Button
                variant="outline"
                asChild
                className="justify-start w-full"
              >
                <a
                  href="./../assets/Oleksandr Dzisiak - Frontend CV.pdf"
                  download
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save CV in PDF
                </a>
              </Button>
            </div>
            <div className="hidden sm:block">
              <ModeToggle />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size="icon" variant="outline">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>All sections</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#contacts">
                      <Contact className="w-4 h-4 mr-2" />
                      Contacts
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#projects">
                      <Save className="w-4 h-4 mr-2" />
                      Projects
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#work">
                      <Save className="w-4 h-4 mr-2" />
                      Work experience
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#education">
                      <Save className="w-4 h-4 mr-2" />
                      Education
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#certification">
                      <Save className="w-4 h-4 mr-2" />
                      Certification
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full">
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a
                      href="./../assets/Oleksandr Dzisiak - Frontend CV.pdf"
                      download
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save PDF
                    </a>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.header>
      </AnimatePresence>
    </>
  );
};

export default Header;
