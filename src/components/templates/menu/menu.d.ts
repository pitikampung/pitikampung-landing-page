import { ReactNode } from "react";

export interface MenuItem {
  label: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  subs?: MenuItem[];
  href?: string;
  onClick?: () => void;
}

export interface MenuProps {
  items?: MenuItem[];
  trigger: ReactNode;
  className?: string;
  useChevron?: boolean;
  menuClassName?: string;
  chervronClassName?: string;
}
