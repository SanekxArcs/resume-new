
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
        <div className=" gap-5  flex flex-col h-fit sticky top-20">
          <Contacts />
          <Separator />
          <TechSkills />
          <Separator />
          <SoftSkills />
          <Separator />
          <Language />
          <Separator />
          <Links />
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
