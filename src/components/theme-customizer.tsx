import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Settings } from "lucide-react"; // Removed Check import

export function ThemeCustomizer() {
  const { theme: mode, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState<number>(
    () => parseFloat(localStorage.getItem("ui-radius") || "0.5")
  );

  // Effect to apply radius and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--radius", `${radius}rem`);
    localStorage.setItem("ui-radius", radius.toString());
  }, [radius]);

  return (
    <>
      <Button
        variant="outline"
        className="justify-start w-full group"
        onClick={() => setOpen(true)}
      >
        <Settings className="group-hover:rotate-45 transition-all duration-300" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[360px]">
          <DialogHeader>
            <DialogTitle>Theme Customizer</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Radius</Label>
              <div className="flex gap-2">
                {[0, 0.3, 0.5, 0.75, 1.0].map((value) => (
                  <Button
                    key={value}
                    variant={radius === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setRadius(value)}
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
                  variant={mode === "light" ? "default" : "outline"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  size="sm"
                  variant={mode === "dark" ? "default" : "outline"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
                <Button
                  size="sm"
                  variant={mode === "system" ? "default" : "outline"}
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
