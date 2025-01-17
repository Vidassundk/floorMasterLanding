"use client";

import { MenuItem } from "@/components/NavLinkItem";

export const useMenuConfig = (): MenuItem[] => {
  return [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
};
