import {motion} from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { headInformation } from "./../../db/db.json";

const MainHead = () => {
  return (
    <>
      <div id="top" className="pt-10 cursor-default select-none lg:pt-8">
        <p className="lg:hidden">About me:</p>
        <motion.h1 className="text-5xl font-medium lg:text-6xl">
          {headInformation.name}
        </motion.h1>
        <motion.h2
          className="mb-4 text-2xl lg:text-4xl text-accent-foreground"
          title="Also i have many "
        >
          {headInformation.work}
        </motion.h2>
        <motion.p className="text-base lg:text-lg">
          {headInformation.about}
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
