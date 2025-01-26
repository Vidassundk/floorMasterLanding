"use client";

import { MenuItem } from "@/components/NavLinkItem";
import { useMenuConfig } from "@/features/navigation/menuConfig";
import { useLanguage } from "../languages/context/LanguageContext";

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
  const { t } = useLanguage();

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
        { href: "tel:+4531886266", text: t("hero.cta2") },
        { href: "mailto:info@gulvmestere.no", text: t("hero.cta3") },
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
