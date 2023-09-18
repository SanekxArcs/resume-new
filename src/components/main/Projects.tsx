import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { FileCode2, Link } from "lucide-react";
import pic1 from "./../../assets/DSC00264.webp";
import pic2 from "./../../assets/DSC00496.webp";
import pic3 from "./../../assets/DSC07871.webp";
import pic4 from "./../../assets/DSC08748.webp";
import pic5 from "./../../assets/DSC09671.webp"; // last
// import pic10 from "./../../assets/IMG_3797.webp";
import pic6 from "./../../assets/photo_2023-09-16_21-16-33.webp";
import pic7 from "./../../assets/photo_2023-09-16_21-16-37.webp";
import pic8 from "./../../assets/photo_2023-09-16_21-16-44.webp";
import pic9 from "./../../assets/photo_2023-09-16_21-16-49.webp";

const Projects = () => {
  // const photo = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic10, pic9, pic8];

  // const projectsElementsBuild = () => {
  //   return photo.map((element: string, index: number) => {
  //     return (
  //       <div
  //         key={index}
  //         className=" transition-all duration-500 hover:drop-shadow-md select-none max-w-80 overflow-hidden max-h-[480px] rounded-md bg-slate-200 "
  //       >
  //         <img className="h-auto rounded" src={element} alt="" />
  //       </div>
  //     );
  //   });
  // };
  // const photos = projectsElementsBuild();

  return (
    <section id="projects" className=" break-before-auto scroll-m-16">
      <Tabs defaultValue="all" className="w-full">
        <h3 className="flex items-center justify-start select-none">
          <FileCode2 className="mr-2" />
          Фото роботи
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
          <div className="flex justify-center max-w-[780px] flex-wrap gap-2 mx-auto">
            <div className="grid grid-cols-5 grid-rows-3 gap-1 sm:gap-2">
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic1}
                alt=""
              />
              <img
                className="object-cover h-full col-span-3 transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1 "
                src={pic5}
                alt=""
              />
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic2}
                alt=""
              />
              <img
                className="object-cover h-full col-span-2 row-span-2 transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic3}
                alt=""
              />
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic4}
                alt=""
              />
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic6}
                alt=""
              />
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic7}
                alt=""
              />
              <img
                className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic9}
                alt=""
              />
              <img
                className="object-cover h-full col-span-2 transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1"
                src={pic8}
                alt=""
              />
              {/* <img className="object-cover h-full transition-all duration-300 rounded-md hover:shadow-md hover:-translate-y-1" src={pic10} alt="" /> */}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="video">
          
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
          Link to see all on:&nbsp;
          <span className="select-all">m-t.netlify.app</span>
        </a>
      </Button>
    </section>
  );
};

export default Projects;
