import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { FileCode2, Link } from "lucide-react";
import { Badge } from "../ui/badge";
import { commercialProjects } from "./../../db/db.json";

const Projects = () => {

  const commercialElement = commercialProjects.map((element, index) => {
    return (
      <div
        key={index}
        className="flex col-span-1 transition-all duration-500 lg:last:col-span-2 last:block hover:scale-[1.02] hover:drop-shadow-md select-none"
      >
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{element.title}</CardTitle>
            <CardDescription>{element.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Features:</p>
            <ul className="flex flex-col gap-1 pl-5 list-disc rows">
              {element.features.map((feature, index) => {
                return (
                  <li key={index} className="text-xs">
                    {feature}
                  </li>
                );
              })}
            </ul>
            <p className="pt-2">This project technologies:</p>
            <ul className="flex flex-wrap gap-1 p-1">
              {element.technologies.map((technology, index) => {
                return <Badge key={index}>{technology}</Badge>;
              })}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="xxxs" variant="link">
              <a href={element.url} target="_blank">
                <Link className="w-4 h-4 mr-2" />
                Link to live demo
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  });


  return (
    <section id="projects" className=" break-before-auto scroll-m-16">
      <Tabs defaultValue="Commercial" className="w-full">
        <h3 className="flex items-center justify-start select-none">
          <FileCode2 className="mr-2" />
          Projects
        </h3>
        <TabsList className="flex flex-col items-center justify-start w-full h-full md:flex-row print:hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Commercial">Commercial projects</TabsTrigger>
          <TabsTrigger value="pet">Pet-projects</TabsTrigger>
          <TabsTrigger value="hide">Hide all</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 place-items-stretch">
            {commercialElement}
          </div>
        </TabsContent>
        <TabsContent value="Commercial">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 place-items-stretch">
            {commercialElement}
          </div>
        </TabsContent>
        <TabsContent value="pet">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 place-items-stretch">
            <p>Coming soon</p>
          </div>
        </TabsContent>
        <TabsContent value="hide"></TabsContent>
      </Tabs>

      <Button
        className="hidden w-full mt-4 print:flex"
        variant="outline"
        asChild
        size="xs"
      >
        <a href="https://o-d.netlify.app/">
          <Link className="w-4 h-4 mr-2" />
          Link to see all available projects
        </a>
      </Button>
    </section>
  );
};

export default Projects;
