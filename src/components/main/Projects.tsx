import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { FileCode2, Link } from "lucide-react";
import ProjectsPhoto from "./projectsPhoto";
import ProjectsVideo from "./projectsVideo";

const Projects = () => {

  return (
    <section id="projects" className=" break-before-auto scroll-m-16">
      <Tabs defaultValue="photo" className="w-full">
        <h3 className="flex items-center justify-start select-none">
          <FileCode2 className="mr-2" />
          Мої роботи
        </h3>
        <TabsList className="flex flex-row items-center justify-start w-full h-full print:hidden">
          <TabsTrigger className="w-full" value="photo">
            Фото
          </TabsTrigger>
          <TabsTrigger className="w-full" value="video">
            Відео
          </TabsTrigger>
          <TabsTrigger className="w-full" value="hide">
            Сховати
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photo">
          <ProjectsPhoto />
        </TabsContent>
        <TabsContent value="video">
          <ProjectsVideo />
        </TabsContent>
        <TabsContent value="hide"></TabsContent>
      </Tabs>

      <Button
        className="hidden w-full mt-4 print:flex"
        variant="outline"
        asChild
        size="xs"
      >
        <a href="https://o-d.netlify.app/" title="My web site o-d.netlify.app">
          <Link className="w-4 h-4 mr-2" />
          Посилання на повне резюме:&nbsp;
          <span className="select-all">marsela.netlify.app</span>
        </a>
      </Button>
    </section>
  );
};

export default Projects;
