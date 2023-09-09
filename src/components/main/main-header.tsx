import {motion} from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

const MainHead = () => {
  return (
    <>
      <div id="top" className="pt-10 cursor-default select-none lg:pt-8">
        <p className="lg:hidden">About me:</p>
        <motion.h1 className="text-5xl font-medium lg:text-6xl">
          Oleksandr Dzisiak
        </motion.h1>
        <motion.h2 className="mb-4 text-2xl lg:text-4xl text-accent-foreground" title="Also i have many ">
          Frontend developer
        </motion.h2>
        <motion.p className="text-base lg:text-lg">
          I am a highly motivated professional with a passion for
          creating visually appealing and user-friendly web applications with
          HTML, CSS and functionality of web app with JavaScript 
          In addition in React.js, I specialize in finding
          solutions to challenges and obstacles, showcasing my adaptability and
          problem-solving skills. Also i have experience with popular frameworks
          such as. Time management is another forte, as I am adept at
          efficient allocation and utilization of time, ensuring timely delivery
          of high-quality work. Beyond this, I actively seek to learn and
          integrate new technologies, reflecting my dedication to continuous
          improvement.
          <Button
            asChild
            variant="outline"
            className="justify-start hidden mt-2 print:flex w-fit"
          >
            <a
              href="https://o-d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Link to my site"
            >
              <Link className="w-4 h-4 mr-2" />
              Click here to see my full and latest resume updates
            </a>
          </Button>
        </motion.p>
      </div>
    </>
  );
}

export default MainHead
