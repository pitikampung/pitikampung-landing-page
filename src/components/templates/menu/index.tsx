"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/molecules";
import styles from "@/shared/styles/components/menu.module.css";
import { cn } from "@/shared/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";
import { MenuProps } from "./menu";

export const Menu: FC<MenuProps> = ({
  items,
  trigger,
  className,
  useChevron,
  chervronClassName,
  menuClassName,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <div className={cn(menuClassName, styles.trigger)}>
          <div className={cn(styles.menu)}>{trigger}</div>
          {useChevron && (
            <ChevronDown
              className={cn(
                chervronClassName,
                "size-5 transition-all duration-200",
                {
                  "rotate-180": isOpen,
                }
              )}
            />
          )}
        </div>
      </DropdownMenuTrigger>
      {items && items?.length ? (
        <DropdownMenuContent
          className={cn(className, styles["menu-content"])}
          align="start"
        >
          <DropdownMenuGroup>
            {items?.map((item) =>
              item?.subs?.length ? (
                <DropdownMenuSub key={item?.label?.toString()}>
                  <DropdownMenuSubTrigger
                    disabled={item.disabled}
                    className={cn(styles["item"])}
                  >
                    {item.label}
                    {item.shortcut && (
                      <DropdownMenuShortcut>
                        {item.shortcut}
                      </DropdownMenuShortcut>
                    )}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                      className={cn(styles["sub-menu-content"])}
                    >
                      {item?.subs?.map((sub) => (
                        <DropdownMenuItem
                          className={cn(styles["item"])}
                          key={sub?.label?.toString()}
                        >
                          {sub.href ? (
                            <Link href={sub.href}>{sub.label}</Link>
                          ) : (
                            sub.label
                          )}
                          <DropdownMenuShortcut>
                            {sub.shortcut}
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem
                  className={cn(styles["item"])}
                  onClick={item?.onClick}
                  key={item?.label?.toString()}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                  {item.shortcut && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      ) : undefined}
    </DropdownMenu>
  );
};
