
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

const Aside = () => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="col-span-4 pr-10"
      >
        <ProfilePhoto />
        <div className="sticky flex flex-col gap-5 h-fit top-20">
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
          
          
          <Interests />
          <Separator className="print:hidden"/>
          <Vcard />
        </div>
      </motion.aside>
    </>
  );
};

export default Aside;
