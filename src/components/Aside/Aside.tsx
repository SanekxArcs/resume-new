
import { motion } from "framer-motion";
import Contacts from "./Contacts";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import Language from "./Language";
import Links from "./Links";
import Interests from "./Interests";
import ProfilePhoto from "./ProfilePhoto";
import Vcard from "./Vcard";
import { Separator } from "../ui/separator";
import Skills from "./Skills";
import Training from "./Training";

const Aside = () => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-4 px-4 lg:px-0 lg:pr-10"
      >
        <ProfilePhoto />
        <div className="flex flex-col gap-5 h-fit">
          <Contacts />
          <Separator />
          <Links />
          <Separator />
          <Language />
          <Separator />
          <TechSkills />
          <Separator />
          <SoftSkills />
          <Separator />
          <Skills/>
          <Separator />
          <Interests />
          <Separator />
          <Training/>
          <Separator className="print:hidden"/>
          <Vcard />
        </div>
      </motion.aside>
    </>
  );
};

export default Aside;
