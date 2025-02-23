import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./button";
import { ReactNode, useState } from "react";
import { Separator } from "../ui/separator";

interface SectionWrapperProps {
  icon: ReactNode;
  title: string;
  separator?: boolean;
  children: ReactNode;
  defaultVisible?: boolean;
}

export function SectionWrapper({
  icon,
  title,
  separator = true,
  children,
  defaultVisible = true,
}: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  return (
    <div>
      <div className="flex items-center justify-between group">
        <h3 className="flex items-center justify-start select-none">
          {icon}
          {title}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500"
          onClick={() => setIsVisible(!isVisible)}
        ><span className="opacity-30">
          {isVisible ? `Hide ` : `Un hide `}
          </span>
          <span className="opacity-30">
          {isVisible ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}</span>
        </Button>
      </div>
      {separator && <Separator className="my-4" />}
      <div
        className={`transition-all duration-200 ${
          isVisible
            ? "opacity-100 max-h-[9999px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}