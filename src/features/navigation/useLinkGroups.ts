"use client";

import { MenuItem } from "@/components/NavLinkItem";
import { useMenuConfig } from "@/features/navigation/menuConfig";

export interface LinkGroup {
  title: string;
  links: {
    href: string;
    text: string;
    target?: string;
  }[];
}

export const useLinkGroups = (): LinkGroup[] => {
  const navigationMenu: MenuItem[] = useMenuConfig();

  // Convert them to the shape required by FooterLinkGroup, filtering out undefined href
  const navigationLinks = navigationMenu
    .filter((menuItem) => menuItem.href)
    .map((menuItem) => ({
      href: menuItem.href as string,
      text: menuItem.label as string,
    }));

  // Return the array of LinkGroup objects for your footer
  return [
    {
      title: "Navigation",
      links: navigationLinks,
    },
    {
      title: "Contact",
      links: [
        { href: "tel:+4748619643", text: "+4748619643" },
        { href: "tel:+4746268062", text: "+4746268062" },
        { href: "mailto:info@gulvmestere.no", text: "info@gulvmestere.no" },
      ],
    },
    {
      title: "Follow us",
      links: [
        {
          href: "https://www.facebook.com/profile.php?id=61565412763854",
          text: "Facebook",
          target: "_blank",
        },
        {
          href: "https://www.instagram.com/gulv_mestere_as",
          text: "Instagram",
          target: "_blank",
        },
      ],
    },
  ];
};
