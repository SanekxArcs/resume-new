import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

import img2 from "./assets/images/2.webp";
import img3 from "./assets/images/3.webp";
import img4 from "./assets/images/4.webp";
import img5 from "./assets/images/5.webp";
import img6 from "./assets/images/6.webp";
import img7 from "./assets/images/7.webp";
import img8 from "./assets/images/8.webp";
import img9 from "./assets/images/9.webp";
import img10 from "./assets/images/10.webp";
import img11 from "./assets/images/11.webp";
import img12 from "./assets/images/12.webp";
import img13 from "./assets/images/13.webp";
import img14 from "./assets/images/14.webp";
import img15 from "./assets/images/15.webp";
import img16 from "./assets/images/16.webp";
import img17 from "./assets/images/17.webp";
import img18 from "./assets/images/18.webp";
import img19 from "./assets/images/19.webp";
import img1 from "./assets/images/100.jpg";

import { ScrollArea } from "./components/ui/scroll-area";
import { AtSign, Linkedin, PhoneOutgoing } from "lucide-react";
 type DataImg = {
    image: string;
}[]
function App() {
  const imageDataArray: DataImg = [
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
    {
      image: img11,
    },
    {
      image: img12,
    },
    {
      image: img13,
    },
    {
      image: img14,
    },
    {
      image: img15,
    },
    {
      image: img16,
    },
    {
      image: img17,
    },
    {
      image: img18,
    },
    {
      image: img19,
    },
    {
      image: img1,
    },
  ];
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between flex-col h-[100svh]">
        <header className="max-h-[20svh] overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between p-5 gap-2.5">
            <div className="flex flex-col items-center justify-center md:gap-2 md:justify-start md:items-start">
                <h1 className="flex text-lg font-extrabold text-center uppercase lg:text-5xl md:text-left">
                  Oleksandr Dzisiak
                </h1>
              <p className="text-xs md:text-base text-muted-foreground">
                Portfolio of SketchUp PV visualizations
              </p>
            </div>

            <nav className="flex flex-col items-center justify-center gap-3">
              <h2 className="hidden text-5xl font-extrabold uppercase lg:block">
                Contacts
              </h2>
              <div className="flex gap-2 text-xs">
                <a className="text-xs" href="tel:+48735145620">
                  <Button variant="outline">
                    <PhoneOutgoing className="w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:oleksandr.dzisiak+pv@gmail.com">
                  <Button className="text-xs" size="icon" variant="outline">
                    <AtSign className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/od-/">
                  <Button className="text-xs" variant="outline">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <ModeToggle />
              </div>
            </nav>
          </div>

          <Separator className="my-5" />
        </header>
        <main className="flex items-center justify-center">
          <ScrollArea className="rounded-none h-[70svh] max-w-[100svw] overflow-hidden lg:px-5 px-1">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
              {imageDataArray.map(({ image }, index) => (
                <article
                  key={index}
                  className="flex flex-col p-5 border-2 rounded-lg bg-card lg:last:col-span-4"
                >
                  <img
                    className="w-full h-full bg-cover rounded-md"
                    src={image}
                    alt="image ov pv"
                  />
                </article>
              ))}
            </div>
          </ScrollArea>
        </main>
        <footer className="flex flex-col justify-end items-center pb-5 max-h-[10svh] ">
          <Separator className="my-5" />
          <p className="text-xs text-center text-muted-foreground md:text-base">
            Made for show my visualization work in SketchUp
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
