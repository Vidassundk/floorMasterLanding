"use client";

import React from "react";
import FooterLinkGroup from "../LinkFooterGroup";
import { useLanguage } from "@/features/languages/context/LanguageContext";
import { useLinkGroups } from "@/features/navigation/useLinkGroups";
import OldLogo from "@/features/navigation/components/OldLogo";

const Footer = () => {
  const linkGroups = useLinkGroups(); // get all footer link groups
  const { t } = useLanguage(); // for that final "© 2025" part

  return (
    <footer className="bg-foreground">
      <div className="mx-auto w-full container p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        {/* Top Section */}
        <div className="md:flex md:justify-between">
          {/* Left: Logo */}
          <div className="mb-6 md:mb-0">
            <OldLogo fill="white" />
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
