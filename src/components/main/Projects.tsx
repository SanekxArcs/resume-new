
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
      description: "Landing-page",
      features: [
        "Multi-Page Layout",
        "Fully Responsive",
        "PageSpeed 99-100",
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
      description: "Landing-page",
      features: [
        "Landing page",
        "Animation when element is visible",
        "Fully Responsive",
        "Contact form",
        "UA and BY languages",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Netlify",
        "JavaScript",
        "Hooks",
        "Animations",
      ],
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
      <div key={index}>
        <Card>
          <CardHeader>
            <CardTitle>{element.title}</CardTitle>
            <CardDescription>{element.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Features:</p>
            <ul className="flex flex-col gap-1 pl-5 list-disc">
              {element.features.map((feature, index) => {
                return (
                  <li key={index} className="text-xs">
                    {feature}
                  </li>
                );
              })}
            </ul>
            <p>This project technologies:</p>
            <ul className="flex flex-wrap gap-1 p-1">
              {element.technologies.map((technology, index) => {
                return (
                  <Badge key={index}>{technology}</Badge>
                );
              })}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="xxxs" variant="link">
              <a href={element.url} target="_blank">
                <Link className="w-4 h-4 mr-2" />Link to live demo
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  });

  return (
    <section id="projects" className="break-before-auto">
      <h3 className="flex items-center justify-start">
        <FileCode2 className="mr-2" />
        Projects
      </h3>
      <Tabs defaultValue="Commercial" className="w-full">
        <TabsList className="flex justify-start w-full print:hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Commercial">Commercial projects</TabsTrigger>
          <TabsTrigger value="Non">Non-commercial projects</TabsTrigger>
          <TabsTrigger value="pet">Pet-projects</TabsTrigger>
        </TabsList>
        <TabsContent value="Commercial">
          <div className="grid gap-2 lg:grid-cols-2">{commercialElement}</div>
        </TabsContent>
        <TabsContent value="all">
          <div className="grid gap-2 lg:grid-cols-2">{commercialElement}</div>
        </TabsContent>
        <TabsContent value="Non">Page do not done jet</TabsContent>
        <TabsContent value="pet">
          <div className="grid gap-2 lg:grid-cols-2">Page do not done jet</div>
        </TabsContent>
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
