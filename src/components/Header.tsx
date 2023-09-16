import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Building2, Contact, FileCode2, Menu, Save, School, FileBadge2  } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { headInformation } from './../db/db.json'
import myPhoto from "./../assets/Untitled-1.webp";
import pdf from './../assets/Margarita Tkachyk.pdf'

const Header = () => {

  const downloadButton = (
    <Button variant="outline" asChild className="justify-start w-full">
      <a href={pdf} download type="pdf" rel="alternate">
        <Save className="w-4 h-4 mr-2" />
        Зберегти резюме в PDF
      </a>
    </Button>
  );

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ opacity: 0, scale: 0, y: -112 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`container print:hidden mx-auto px-4 sticky top-0 rounded-br-md rounded-bl-md bg-gradient-to-br w-full flex items-center justify-between from-primary/10 to-primary/70 backdrop-blur-md h-14 z-50`}
        >
          <div className="flex gap-2">
            <div className="w-10 h-10 mx-auto my-16 overflow-hidden transition-all duration-700 rounded-full group drop-shadow-5xl bg-gradient-to-br from-primary/40 to-primary/70">
              <img
                className="w-10 h-10 drop-shadow-5xl"
                src={myPhoto}
                alt={headInformation.name}
                title="Scan with your Phone and it automatically add my contact to you phone"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="font-semibold">{headInformation.name}</p>
              <p className="text-sm text-secondary">
                {headInformation.work}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-fit">
            <div className="hidden sm:block">{downloadButton}</div>
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
                <DropdownMenuLabel>Усі секції</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#contacts">
                      <Contact className="w-4 h-4 mr-2" />
                      Контакти
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
                      Фото роботи
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
                      Досвід Роботи
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
                      Навчання
                    </a>
                  </Button>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start w-full"
                  >
                    <a href="#certification">
                      <FileBadge2 className="w-4 h-4 mr-2" />
                      Certification
                    </a>
                  </Button>
                </DropdownMenuItem> */}
                <DropdownMenuItem className="w-full sm:hidden"></DropdownMenuItem>
                <div className="sm:hidden">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex w-full gap-2">
                    <ModeToggle />
                    Змінити тему
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
