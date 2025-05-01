import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Contact,
  FileCode2,
  Menu,
  Save,
  School,
  FileBadge2,
  LucideBookOpenCheck,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { headInformation } from "@/db/db.json";
import myPhoto from "@/assets/profile.webp";
import { ThemeCustomizer } from "./theme-customizer";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const navigationItems: NavItem[] = [
  {
    href: "#contacts",
    icon: <Contact className="w-4 h-4 mr-2" />,
    label: "Contacts",
  },
  {
    href: "#projects",
    icon: <FileCode2 className="w-4 h-4 mr-2" />,
    label: "Projects",
  },
  {
    href: "#work",
    icon: <Building2 className="w-4 h-4 mr-2" />,
    label: "Work experience",
  },
  {
    href: "#education",
    icon: <School className="w-4 h-4 mr-2" />,
    label: "Education",
  },
  {
    href: "#certification",
    icon: <FileBadge2 className="w-4 h-4 mr-2" />,
    label: "Certification",
  },
];

const ProfileSection = () => (
  <div className="flex gap-2">
    <div className="w-10 h-10 mx-auto my-16 overflow-hidden transition-all duration-700 border-2 rounded-full border-primary group bg-gradient-to-br from-primary/40 to-primary/70">
      <img
        src={myPhoto}
        alt={headInformation.name}
        title="Scan with your Phone and it automatically add my contact to you phone"
      />
    </div>
    <div className="flex flex-col items-start justify-center">
      <p className="font-black">{headInformation.name}</p>
      <p className="text-sm text-muted-foreground">{headInformation.work}</p>
    </div>
  </div>
);

const Header = () => {
  // Define the path relative to the public directory
  const cvPath = '/CV Front End Developer - Oleksandr Dzisiak.pdf';

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0, scale: 0, y: -112 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container print:hidden mx-auto px-4 sticky top-0 rounded-br-md rounded-bl-md bg-gradient-to-br w-full flex items-center justify-between from-primary/10 to-primary/70 backdrop-blur-md h-14 z-50"
      >
        <ProfileSection />

        <div className="flex items-center gap-2 w-fit">
          <div>
            <ThemeCustomizer />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="flex flex-col gap-1">
              <DropdownMenuLabel className="select-none">
                All sections
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.href} className="p-0 justify-start">
                  <a href={item.href} className="flex items-start w-full p-2">
                    {item.icon}
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="select-none">
                Resume | CV
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-0">
                <a
                  href="https://docs.google.com/document/d/1AtD3nabbCMupe03k914wvlceHTF70_34X5NQDPS3iz4/edit?usp=sharing"
                  download
                  type="application/pdf"
                  rel="noopener noreferrer"
                  className="flex items-start w-full p-2"
                >
                  <LucideBookOpenCheck className="w-4 h-4 mr-2" />
                  Open In Docs
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <a
                  href={cvPath} // Update the href to use the public path
                  download
                  rel="noopener noreferrer"
                  className="flex items-start w-full p-2"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
