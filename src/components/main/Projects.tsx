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

const Projects = () => {
  const commercialP = [
    {
      title: "Solar Sense",
      description: "Corporate Websites - The site was designed to showcase the company in the renewable energy space on the Internet. Branding was created, as well as the site from scratch to the state it is today.",
      features: [
        "Multi-Page SPA",
        "Fully Responsive",
        "GTmetrix: A",
        "Calculator",
        "Validation",
      ],
      technologies: [
        "Vite",
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "React Router",
        "Host LH.pl",
      ],
      url: "http://solarsense.pl/",
    },
    {
      title: "LIBERTY IMMIGRATION",
      description: "Bussines card - The website is a business card landing page of a company dealing with legalization of foreigners in Poland. The site was created from scratch and the design accommodates two languages, Ukrainian and Belarusian.",
      features: [
        "Animation when element is visible",
        "Fully Responsive",
        "Contact form",
        "UA and BY languages",
        "GTmetrix: A",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Netlify",
        "JavaScript",
        "Custom Hooks",
      ],
      url: "https://l-i.netlify.app/",
    },
    {
      title: "UWP Digital",
      description:
        "Only the first main page of the site was created using the Pixel Perfect layout, and then it was handed over to the team.",
      features: [
        "Made first page",
        "Fully Responsive",
        "Contact form",
        "Semantic",
        "Slider",
        "Accordion",
        "Modal",
      ],
      technologies: ["HTML", "Tailwind CSS"],
      url: "https://uwp.digital/en",
    },
    {
      title: "Fun Quest",
      description:
        "Company website - Based on a template, the template was modified according to the client's needs, I also filled the entire site with content and customized it according to the client's needs.",
      features: [
        "Remade WP template",
        "Fully Responsive",
        "Contact form",
        "Slider",
        "CMS",
      ],
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "WordPress", "PHP"],
      url: "https://fq.ua/",
    },
    {
      title: "Belavtodor UA",
      description:
        "Corporate Websites - I created the site and all its elements according to the designer's layout.",
      features: [
        "Fully Responsive",
        "Semantic",
        "Contact form",
        "Slider",
        "Accordion",
        "Modal",
      ],
      technologies: ["HTML", "CSS", "SASS"],
      url: "https://web.archive.org/web/20210618203112/https://belautodor-ua.com/",
    },
    {
      title: "Eco-smart",
      description:
        "E-commerce - Site redesign, provide an admin panel for content management, customization for all types of devices",
      features: ["Design", "Fully Responsive", "Semantic"],
      technologies: ["HTML", "CSS", "WP", "Photoshop"],
      url: "https://eco-smart.com.ua/",
    },
    {
      title: "Club Smart Mam",
      description:
        "News portal - Creating a modern design for the Smart Mom Club news portal, site creation, provide an admin panel for content management, customization for all types of devices",
      features: [
        "Fully Responsive",
        "Contact form",
        "Semantic",
        "Forum",
        "Accordion",
        "Modal",
      ],
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "WordPress", "PHP"],
      url: "https://www.smartmama.com.ua/",
    },
    {
      title: "Plenum",
      description:
        "Business card-page - Creation of a unique design and programming of a business card website for a legal association.",
      features: [
        "Create a unique design for the site",
        "Create a blog",
        "CRM",
        "Accommodate all types of devices",
      ],
      technologies: [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "WordPress",
        "PhotoShop",
      ],
      url: "https://l-i.netlify.app/",
    },
    {
      title: "Webpage - Resume/CV",
      description:
        "Site Resume - make for peoples their CV online and pdf ready, my Design of ",
      features: ["Design", "Fully Responsive", "Semantic", "Accordion"],
      technologies: ["HTML", "Tailwind CSS", "React", "Figma", "Photoshop"],
      url: "https://l-i.netlify.app/",
    },
  ];

  // const nonComertialP = [
  //   {
  //     title: "Accounting Employees SPA",
  //     url: "https://app-accounting-employees.netlify.app/",
  //   },
  //   {
  //     title: "Book List App",
  //     description: "SPA",
  //     features: [
  //       "Responsive",
  //       "Filter ",
  //       "Displays data from database",
  //       "Add / Edit / Update / Delete",
  //       "Toasts alerts",
  //     ],
  //     technologies: [
  //       "Html5",
  //       "TypeScript",
  //       "Vite",
  //       "Tailwind CSS",
  //       "Netlify",
  //       "Shadcn/ui",
  //     ],
  //     url: "https://main--demo-book-list.netlify.app/",
  //   },
  //   {
  //     url: "https://v-l.netlify.app/",
  //   },
  // ];
  // const petP = [
  //   {
  //     title: "Tip calculator for many peoples SPA",
  //     url: "https://tip-calculator-many-peoples.netlify.app/",
  //   },
  //   {
  //     title: "Sushi Shop SPA",
  //     url: "https://sushi-shop.netlify.app",
  //   },
  //   {
  //     title: "QR-Code vcard generator SPA",
  //     url: "https://qr-coge-vcard-generator.netlify.app",
  //   },
  // ];

  const commercialElement = commercialP.map((element, index) => {
    return (
      <div key={index} className="flex col-span-1 transition-all duration-500 lg:last:col-span-2 last:block hover:scale-[1.02] hover:drop-shadow-md select-none">
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
      <Tabs defaultValue="hide" className="w-full">
        <h3 className="flex items-center justify-start select-none">
          <FileCode2 className="mr-2" />
          Projects
        </h3>
        <TabsList className="flex flex-col items-center justify-start w-full h-full md:flex-row print:hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Commercial">Commercial projects</TabsTrigger>
          <TabsTrigger value="Non">Non-commercial projects</TabsTrigger>
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
        <TabsContent value="Non">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 place-items-stretch">
            <p>Coming soon</p>
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
