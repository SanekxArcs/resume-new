
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
import MainHead from "../main/MainHead";

const Aside = () => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-4 px-4 lg:px-0 lg:pr-10 order-1 lg:order-none"
      >
        <ProfilePhoto />
        <div className="lg:hidden mb-10">
            <MainHead />
            </div>
        <div className="sticky flex flex-col gap-5 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto top-20 hover:overflow-y-auto mb-10 lg:mb-0">
          
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
          <Separator className="print:hidden hidden lg:block" />
          <Vcard />
        </div>
      </motion.aside>
    </>
  );
};

export default Aside;
