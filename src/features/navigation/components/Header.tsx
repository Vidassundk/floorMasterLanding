"use client";

import React from "react";
import { useMenuConfig } from "@/features/navigation/menuConfig";
import HeaderUI from "@/components/HeaderUI";
import Button from "@/components/Button";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { useLanguage } from "@/features/languages/context/LanguageContext";
import { languageOptions } from "@/features/languages/languageOptions";
import NavLinkItem from "@/components/NavLinkItem";
import HamburgerMenu from "@/components/HamburgerMenu";
import SubMenuButton from "@/components/SubMenuButton";
import IconButton from "@/components/IconButton";
import OldLogo from "./OldLogo";

const Header: React.FC = () => {
  const navigationMenu = useMenuConfig(); // Now uses translated labels

  const { language, setLanguage, t } = useLanguage();

  const activeLanguage = languageOptions.find(
    (option) => option.value === language
  );

  return (
    <HeaderUI
      logo={<OldLogo size={90} />}
      ctaElements={
        <ul className="flex items-center flex-row">
          <li>
            <Button
              href="tel:+4748619643"
              text={t("hero.cta2")}
              icon={<PhoneIcon fill="#f8fafc" />}
              className="text-base bg-gulvGreen hover:opacity-90 focus:ring-gray-300 text-slate-50 mr-2 md:mr-0"
              accessabilityLabel="Call Us Button"
            />
          </li>

          <li className="md:hidden sm:-mr-4">
            <SubMenuButton
              subMenu={languageOptions.map((option) => ({
                label: option.label,
                onClick: () => setLanguage(option.value as typeof language),
                icon: option.flag,
              }))}
              align="right"
            >
              <IconButton icon={activeLanguage?.flag} />
            </SubMenuButton>
          </li>
          <li className="sm:hidden -mr-2">
            <HamburgerMenu />
          </li>
        </ul>
      }
      navigationElement={
        <div
          className="items-center justify-center w-full hidden sm:flex"
          id="mobile-menu-2"
        >
          <ul className="gap-8 hidden sm:flex flex-row">
            {navigationMenu.map((link, index) => (
              <li key={index}>
                <NavLinkItem
                  href={link.href}
                  label={link.label}
                  onClick={link.onClick}
                />
              </li>
            ))}

            <li className="hidden md:block">
              <SubMenuButton
                subMenu={languageOptions.map((option) => ({
                  label: option.label,
                  onClick: () => setLanguage(option.value as typeof language),
                  icon: option.flag,
                }))}
                align="right"
              >
                <div className="flex flex-row gap-2 items-center">
                  <p className="font-bold  cursor-pointer hover:opacity-80">
                    {activeLanguage?.label || "Select Language"}
                  </p>
                  <div className="h-4 w-4 flex items-center pb-[2px]">
                    {activeLanguage?.flag}
                  </div>
                </div>
              </SubMenuButton>
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default Header;
