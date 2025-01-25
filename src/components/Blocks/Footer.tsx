"use client";

import React from "react";
import Logo from "@/features/navigation/components/Logo";
import { useMenuConfig } from "@/features/navigation/menuConfig";
import FooterLinkGroup from "../LinkFooterGroup";
import { useLanguage } from "@/features/languages/context/LanguageContext";

const Footer = () => {
  // Grab the array of MenuItems from useMenuConfig
  const navigationMenu = useMenuConfig();
  const { t } = useLanguage();

  // Convert them to the shape required by FooterLinkGroup, filtering out undefined href
  const navigationLinks = navigationMenu
    .filter((menuItem) => menuItem.href)
    .map((menuItem) => ({
      href: menuItem.href as string,
      text: menuItem.label as string,
    }));

  const linkGroups = [
    {
      title: "Navigation",
      links: navigationLinks,
    },
    {
      title: "Contact",
      links: [
        { href: "tel:+4531886266", text: "Call Us" },
        { href: "mailto:info@gulvmestere.no", text: "Mail Us" },
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

  return (
    <footer className="bg-foreground">
      <div className="mx-auto w-full container p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        {/* Top Section */}
        <div className="md:flex md:justify-between">
          {/* Left: Logo */}
          <div className="mb-6 md:mb-0">
            <Logo fill="white" />
          </div>

          {/* Right: Link Groups */}
          <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <FooterLinkGroup
                key={group.title}
                title={group.title}
                links={group.links}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 sm:mt-0 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2025{" "}
            <a href="" className="hover:underline">
              Gulv Mestre AS™
            </a>
            . {" " + t("footer.copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
