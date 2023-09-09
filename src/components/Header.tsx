import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Building2, Contact, FileCode2, Menu, Save, School, FileBadge2  } from "lucide-react";
import myPhoto from "./../assets/IMG_20220708_18031022.webp";
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
          transition={{ duration: 1 }}
          className={`container print:hidden mx-auto px-4 sticky top-2  rounded-md bg-gradient-to-br w-full flex items-center justify-between from-primary/10 to-primary/70 backdrop-blur-md h-14 z-50`}
        >
          <div className="flex gap-2">
            <div className="mx-auto my-2 overflow-hidden transition-all duration-700 rounded-full group x-auto h-10 w-10 drop-shadow-5xl hover:rounded-md bg-gradient-to-br from-primary/40 to-primary/70">
              <img
                className="absolute top-0 left-0 w-10 h-10 drop-shadow-5xl"
                src={myPhoto}
                alt="Oleksandr Dzisiak"
                title="Scan with your Phone and it automatically add my contact to you phone"
              />
            </div>

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
                      <FileCode2 className="w-4 h-4 mr-2" />
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
                      <Building2 className="w-4 h-4 mr-2" />
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
                      <School className="w-4 h-4 mr-2" />
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
                      <FileBadge2  className="w-4 h-4 mr-2" />
                      Certification
                    </a>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full">
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full sm:hidden"
                  >
                    <a
                      href="./../assets/Oleksandr Dzisiak - Frontend CV.pdf"
                      download
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save CV in PDF
                    </a>
                  </Button>
                </DropdownMenuItem>
                <div className="sm:hidden">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex w-full gap-2">
                    <ModeToggle />
                    Change theme
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.header>
      </AnimatePresence>
    </>
  );
};

export default Header;
