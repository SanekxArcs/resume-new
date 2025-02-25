import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Settings } from "lucide-react";

const themes = [
  {
    name: "zinc",
    label: "Zinc",
    activeColor: "240 5.9% 10%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "240 10% 3.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "240 10% 3.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "240 10% 3.9%",
      "--primary": "240 5.9% 10%",
      "--primary-foreground": "0 0% 98%",
      "--secondary": "240 4.8% 95.9%",
      "--secondary-foreground": "240 5.9% 10%",
      "--muted": "240 4.8% 95.9%",
      "--muted-foreground": "240 3.8% 46.1%",
      "--accent": "240 4.8% 95.9%",
      "--accent-foreground": "240 5.9% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 5.9% 90%",
      "--input": "240 5.9% 90%",
      "--ring": "240 5.9% 10%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "240 10% 3.9%",
      "--foreground": "0 0% 98%",
      "--card": "240 10% 3.9%",
      "--card-foreground": "0 0% 98%",
      "--popover": "240 10% 3.9%",
      "--popover-foreground": "0 0% 98%",
      "--primary": "0 0% 98%",
      "--primary-foreground": "240 5.9% 10%",
      "--secondary": "240 3.7% 15.9%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "240 3.7% 15.9%",
      "--muted-foreground": "240 5% 64.9%",
      "--accent": "240 3.7% 15.9%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 3.7% 15.9%",
      "--input": "240 3.7% 15.9%",
      "--ring": "240 4.9% 83.9%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "red",
    label: "Red",
    activeColor: "0 72.2% 50.6%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 3.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "0 0% 3.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "0 0% 3.9%",
      "--primary": "0 72.2% 50.6%",
      "--primary-foreground": "0 85.7% 97.3%",
      "--secondary": "0 0% 96.1%",
      "--secondary-foreground": "0 0% 9%",
      "--muted": "0 0% 96.1%",
      "--muted-foreground": "0 0% 45.1%",
      "--accent": "0 0% 96.1%",
      "--accent-foreground": "0 0% 9%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "0 0% 89.8%",
      "--input": "0 0% 89.8%",
      "--ring": "0 72.2% 50.6%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "0 0% 3.9%",
      "--foreground": "0 0% 98%",
      "--card": "0 0% 3.9%",
      "--card-foreground": "0 0% 98%",
      "--popover": "0 0% 3.9%",
      "--popover-foreground": "0 0% 98%",
      "--primary": "0 72.2% 50.6%",
      "--primary-foreground": "0 85.7% 97.3%",
      "--secondary": "0 0% 14.9%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "0 0% 14.9%",
      "--muted-foreground": "0 0% 63.9%",
      "--accent": "0 0% 14.9%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "0 0% 14.9%",
      "--input": "0 0% 14.9%",
      "--ring": "0 72.2% 50.6%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "orange",
    label: "Orange",
    activeColor: "24.6 95% 53.1%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "20 14.3% 4.1%",
      "--card": "0 0% 100%",
      "--card-foreground": "20 14.3% 4.1%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "20 14.3% 4.1%",
      "--primary": "24.6 95% 53.1%",
      "--primary-foreground": "60 9.1% 97.8%",
      "--secondary": "60 4.8% 95.9%",
      "--secondary-foreground": "24 9.8% 10%",
      "--muted": "60 4.8% 95.9%",
      "--muted-foreground": "25 5.3% 44.7%",
      "--accent": "60 4.8% 95.9%",
      "--accent-foreground": "24 9.8% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "60 9.1% 97.8%",
      "--border": "20 5.9% 90%",
      "--input": "20 5.9% 90%",
      "--ring": "24.6 95% 53.1%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "20 14.3% 4.1%",
      "--foreground": "60 9.1% 97.8%",
      "--card": "20 14.3% 4.1%",
      "--card-foreground": "60 9.1% 97.8%",
      "--popover": "20 14.3% 4.1%",
      "--popover-foreground": "60 9.1% 97.8%",
      "--primary": "47.9 95.8% 53.1%",
      "--primary-foreground": "26 83.3% 14.1%",
      "--secondary": "60 4.8% 95.9%",
      "--secondary-foreground": "24 9.8% 10%",
      "--muted": "60 4.8% 95.9%",
      "--muted-foreground": "25 5.3% 44.7%",
      "--accent": "60 4.8% 95.9%",
      "--accent-foreground": "24 9.8% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "60 9.1% 97.8%",
      "--border": "12 6.5% 15.1%",
      "--input": "12 6.5% 15.1%",
      "--ring": "20.5 90.2% 48.2%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "green",
    label: "Green",
    activeColor: "142.1 76.2% 36.3%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "240 10% 3.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "240 10% 3.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "240 10% 3.9%",
      "--primary": "142.1 76.2% 36.3%",
      "--primary-foreground": "355.7 100% 97.3%",
      "--secondary": "240 4.8% 95.9%",
      "--secondary-foreground": "240 5.9% 10%",
      "--muted": "240 4.8% 95.9%",
      "--muted-foreground": "240 3.8% 46.1%",
      "--accent": "240 4.8% 95.9%",
      "--accent-foreground": "240 5.9% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 5.9% 90%",
      "--input": "240 5.9% 90%",
      "--ring": "142.1 76.2% 36.3%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "20 14.3% 4.1%",
      "--foreground": "0 0% 95%",
      "--card": "24 9.8% 10%",
      "--card-foreground": "0 0% 95%",
      "--popover": "0 0% 9%",
      "--popover-foreground": "0 0% 95%",
      "--primary": "142.1 70.6% 45.3%",
      "--primary-foreground": "144.9 80.4% 10%",
      "--secondary": "240 3.7% 15.9%",
      "--secondary-foreground": "0 0% 98%",
      "--muted": "0 0% 15%",
      "--muted-foreground": "240 5% 64.9%",
      "--accent": "12 6.5% 15.1%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 85.7% 97.3%",
      "--border": "240 3.7% 15.9%",
      "--input": "240 3.7% 15.9%",
      "--ring": "142.4 71.8% 29.2%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "blue",
    label: "Blue",
    activeColor: "221.2 83.2% 53.3%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "222.2 84% 4.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "222.2 84% 4.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "222.2 84% 4.9%",
      "--primary": "221.2 83.2% 53.3%",
      "--primary-foreground": "210 40% 98%",
      "--secondary": "210 40% 96.1%",
      "--secondary-foreground": "222.2 47.4% 11.2%",
      "--muted": "210 40% 96.1%",
      "--muted-foreground": "215.4 16.3% 46.9%",
      "--accent": "210 40% 96.1%",
      "--accent-foreground": "222.2 47.4% 11.2%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "214.3 31.8% 91.4%",
      "--input": "214.3 31.8% 91.4%",
      "--ring": "221.2 83.2% 53.3%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "222.2 84% 4.9%",
      "--foreground": "210 40% 98%",
      "--card": "222.2 84% 4.9%",
      "--card-foreground": "210 40% 98%",
      "--popover": "222.2 84% 4.9%",
      "--popover-foreground": "210 40% 98%",
      "--primary": "217.2 91.2% 59.8%",
      "--primary-foreground": "222.2 47.4% 11.2%",
      "--secondary": "217.2 32.6% 17.5%",
      "--secondary-foreground": "210 40% 98%",
      "--muted": "217.2 32.6% 17.5%",
      "--muted-foreground": "215 20.2% 65.1%",
      "--accent": "217.2 32.6% 17.5%",
      "--accent-foreground": "210 40% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "217.2 32.6% 17.5%",
      "--input": "217.2 32.6% 17.5%",
      "--ring": "224.3 76.3% 48%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "yellow",
    label: "Yellow",
    activeColor: "47.9 95.8% 53.1%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "20 14.3% 4.1%",
      "--card": "0 0% 100%",
      "--card-foreground": "20 14.3% 4.1%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "20 14.3% 4.1%",
      "--primary": "47.9 95.8% 53.1%",
      "--primary-foreground": "26 83.3% 14.1%",
      "--secondary": "60 4.8% 95.9%",
      "--secondary-foreground": "24 9.8% 10%",
      "--muted": "60 4.8% 95.9%",
      "--muted-foreground": "25 5.3% 44.7%",
      "--accent": "60 4.8% 95.9%",
      "--accent-foreground": "24 9.8% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "60 9.1% 97.8%",
      "--border": "20 5.9% 90%",
      "--input": "20 5.9% 90%",
      "--ring": "20 14.3% 4.1%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "20 14.3% 4.1%",
      "--foreground": "60 9.1% 97.8%",
      "--card": "20 14.3% 4.1%",
      "--card-foreground": "60 9.1% 97.8%",
      "--popover": "20 14.3% 4.1%",
      "--popover-foreground": "60 9.1% 97.8%",
      "--primary": "47.9 95.8% 53.1%",
      "--primary-foreground": "26 83.3% 14.1%",
      "--secondary": "12 6.5% 15.1%",
      "--secondary-foreground": "60 9.1% 97.8%",
      "--muted": "12 6.5% 15.1%",
      "--muted-foreground": "24 5.4% 63.9%",
      "--accent": "12 6.5% 15.1%",
      "--accent-foreground": "60 9.1% 97.8%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "60 9.1% 97.8%",
      "--border": "12 6.5% 15.1%",
      "--input": "12 6.5% 15.1%",
      "--ring": "35.5 91.7% 32.9%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
  {
    name: "violet",
    label: "Violet",
    activeColor: "262.1 83.3% 57.8%",
    cssVars: {
      "--background": "0 0% 100%",
      "--foreground": "224 71.4% 4.1%",
      "--card": "0 0% 100%",
      "--card-foreground": "224 71.4% 4.1%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "224 71.4% 4.1%",
      "--primary": "262.1 83.3% 57.8%",
      "--primary-foreground": "210 20% 98%",
      "--secondary": "220 14.3% 95.9%",
      "--secondary-foreground": "220.9 39.3% 11%",
      "--muted": "220 14.3% 95.9%",
      "--muted-foreground": "220 8.9% 46.1%",
      "--accent": "220 14.3% 95.9%",
      "--accent-foreground": "220.9 39.3% 11%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 20% 98%",
      "--border": "220 13% 91%",
      "--input": "220 13% 91%",
      "--ring": "262.1 83.3% 57.8%",
      "--radius": "0.5rem",
      "--chart-1": "12 76% 61%",
      "--chart-2": "173 58% 39%",
      "--chart-3": "197 37% 24%",
      "--chart-4": "43 74% 66%",
      "--chart-5": "27 87% 67%",
    },
    darkMode: {
      "--background": "224 71.4% 4.1%",
      "--foreground": "210 20% 98%",
      "--card": "224 71.4% 4.1%",
      "--card-foreground": "210 20% 98%",
      "--popover": "224 71.4% 4.1%",
      "--popover-foreground": "210 20% 98%",
      "--primary": "263.4 70% 50.4%",
      "--primary-foreground": "210 20% 98%",
      "--secondary": "215 27.9% 16.9%",
      "--secondary-foreground": "210 20% 98%",
      "--muted": "215 27.9% 16.9%",
      "--muted-foreground": "217.9 10.6% 64.9%",
      "--accent": "215 27.9% 16.9%",
      "--accent-foreground": "210 20% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 20% 98%",
      "--border": "215 27.9% 16.9%",
      "--input": "215 27.9% 16.9%",
      "--ring": "263.4 70% 50.4%",
      "--chart-1": "220 70% 50%",
      "--chart-2": "160 60% 45%",
      "--chart-3": "30 80% 55%",
      "--chart-4": "280 65% 60%",
      "--chart-5": "340 75% 55%",
    },
  },
];

export function ThemeCustomizer() {
  const { theme: currentTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(0.5);

  const applyTheme = (theme: string) => {
    const root = document.documentElement;
    const selectedTheme = themes.find((t) => t.name === theme);

    if (selectedTheme) {
      const vars =
        currentTheme === "dark"
          ? selectedTheme.darkMode
          : selectedTheme.cssVars;
      Object.entries(vars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  };

  const setThemeRadius = (radius: number) => {
    const root = document.documentElement;
    root.style.setProperty("--radius", `${radius}rem`);
  };

  return (
    <>
      <Button
        variant="outline"
        className="justify-start w-full group"
        onClick={() => setOpen(true)}
      >
        <Settings className="group-hover:rotate-45 transition-all duration-300"/>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[360px]">
          <DialogHeader>
            <DialogTitle>Theme Customizer</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Color</Label>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <Button
                    key={theme.name}
                    variant="outline"
                    size="icon"
                    onClick={() => applyTheme(theme.name)}
                    style={{
                      backgroundColor: `hsl(${theme.activeColor})`,
                      border: "none",
                    }}
                    className="w-6 h-6 rounded-full"
                  >
                    {theme.name === "zinc" && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Radius</Label>
              <div className="flex gap-2">
                {[0, 0.3, 0.5, 0.75, 1.0].map((value) => (
                  <Button
                    key={value}
                    variant={radius === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setRadius(value);
                      setThemeRadius(value);
                    }}
                    className="min-w-[48px]"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Label>Theme</Label>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant={currentTheme === "light" ? "default" : "outline"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button 
                  size="sm"
                  variant={currentTheme === "dark" ? "default" : "outline"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
                <Button 
                  size="sm"
                  variant={currentTheme === "system" ? "default" : "outline"}
                  onClick={() => setTheme("system")}
                >
                  System
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
