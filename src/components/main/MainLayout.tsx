
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Training from "./Training";
import MainHead from "./MainHead";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col col-span-4 gap-10 px-4 overflow-hidden lg:px-0 lg:pl-10 lg:col-span-8 order-2 lg:order-none"
      >
        <div className="lg:block hidden">
          <MainHead />
        </div>
        <Projects />
        <WorkExperience />
        <Education />
        <Training />
      </motion.main>
    </>
  );
};

export default Main;
