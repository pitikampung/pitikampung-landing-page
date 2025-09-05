"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as AtomAccordion,
} from "@/components/atoms";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { AccordionProps } from "./accordion";

export const Accordion: FC<AccordionProps> = ({
  items,
  type,
  className,
  collapsible,
}) => {
  return (
    <AtomAccordion
      type={type}
      collapsible={collapsible}
      className={cn(className)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={cn(item?.className)}
        >
          <AccordionTrigger className={cn(item?.triggerClassName)}>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className={cn(item?.contentClassName)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AtomAccordion>
  );
};
