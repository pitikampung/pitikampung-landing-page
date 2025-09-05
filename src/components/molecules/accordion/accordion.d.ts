import { ReactNode } from "react";

export interface IAccordionItem {
  value: string;
  className?: string;
  trigger: ReactNode;
  triggerClassName?: string;
  content: ReactNode;
  contentClassName?: string;
}

export interface AccordionProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  items: IAccordionItem[];
}
