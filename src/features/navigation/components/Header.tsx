"use client";

import React from "react";
import { useMenuConfig } from "@/features/navigation/menuConfig";
import HeaderUI from "@/components/HeaderUI";
import Button from "@/components/Button";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Logo from "@/features/navigation/components/Logo";
import { useLanguage } from "@/features/languages/context/LanguageContext";
import { languageOptions } from "@/features/languages/languageOptions";
import NavLinkItem from "@/components/NavLinkItem";
import HamburgerMenu from "@/components/HamburgerMenu";
import SubMenuButton from "@/components/SubMenuButton";
import IconButton from "@/components/IconButton";

const Header: React.FC = () => {
  const navigationMenu = useMenuConfig();
  const { language, setLanguage } = useLanguage();

  const activeLanguage = languageOptions.find(
    (option) => option.value === language
  );

  return (
    <HeaderUI
      logo={<Logo />}
      ctaElements={
        <ul className="flex items-center flex-row">
          <li>
            <Button
              href="#"
              text="Call Us"
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
            <HamburgerMenu navigationItems={navigationMenu} />
          </li>
        </ul>
      }
      navigationElement={
        <div
          className="items-center justify-center w-full hidden sm:flex"
          id="mobile-menu-2"
        >
          <ul className="gap-6 hidden sm:flex flex-row">
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
                  <NavLinkItem
                    label={activeLanguage?.label || "Select Language"}
                    subMenu={languageOptions.map((option) => ({
                      label: option.label,
                      onClick: () =>
                        setLanguage(option.value as typeof language),
                      icon: option.flag,
                    }))}
                  />
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
