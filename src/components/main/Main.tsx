
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Training from "./Training";
import MainHead from "./main-header";
import Projects from "./Projects";

const Main = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2, delay: 0.5 }}
        className="flex flex-col col-span-8 gap-10 pl-10"
      >
        <MainHead/>
        <Projects/>
        <WorkExperience />
        <Education />
        <Training />
      </motion.main>
    </>
  );
};

export default Main;
