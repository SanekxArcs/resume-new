import {motion} from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

const MainHead = () => {
  return (
    <>
      <div id="top" className=" cursor-default select-none">
        <motion.h1 className="text-6xl font-medium">
          Oleksandr Dzisiak
        </motion.h1>
        <motion.h2 className="text-4xl text-accent-foreground mb-4">
          Frontend developer
        </motion.h2>
        <motion.p className="text-lg">
          I am a highly <b>motivated</b> professional with a passion for
          creating visually appealing and user-friendly web applications. My
          expertise encompasses effective interaction and exchange of
          information to ensure seamless communication. I excel in collaborative
          efforts towards a common goal, demonstrating teamwork that guides and
          inspires a group towards success. In addition to my proficiency in{" "}
          <b> HTML, CSS, JavaScript </b>, I specialize in finding solutions to
          challenges and obstacles, showcasing my adaptability and
          problem-solving skills. Also i have experience with popular frameworks
          such as <b>React.js</b> . Time management is another forte, as I am
          adept at efficient allocation and utilization of time, ensuring timely
          delivery of high-quality work. Beyond this, I actively seek to learn
          and integrate new technologies, reflecting my dedication to continuous
          improvement.
          <br />
          <Button
            asChild
            variant="outline"
            className="hidden print:flex justify-start w-fit"
          >
            <a
              href="https://o-d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link className="mr-2 w-4 h-4" />
              Click here to see my full and latest resume updates
            </a>
          </Button>
        </motion.p>
      </div>
    </>
  );
}

export default MainHead
