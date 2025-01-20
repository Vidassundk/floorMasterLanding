"use client";

import { MenuItem } from "@/components/NavLinkItem";

export const useMenuConfig = (): MenuItem[] => {
  return [
    { label: "Services", href: "/services" },
    { label: "F.A.Q.", href: "/contact" },
  ];
};
