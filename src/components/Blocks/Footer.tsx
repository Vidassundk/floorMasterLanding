"use client";

import React from "react";

import Logo from "@/features/navigation/components/Logo";
import { useMenuConfig } from "@/features/navigation/menuConfig";
import NavLinkItem from "../NavLinkItem";

import PhoneIcon from "../icons/PhoneIcon";
import IconLink from "../IconLink";
import MailIcon from "../icons/MailIcon";

const Footer = () => {
  const navigationMenu = useMenuConfig();

  return (
    <div className="text-background relative pt-24">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 h-full pb-12">
        <div className="flex items-end px-8 lg:px-0 lg:pb-0 pb-6">
          <Logo fill="var(--background)" />
        </div>
        <div />
        <div />
        <ul className="flex px-8 flex-col gap-3">
          {navigationMenu.map((item, index) => (
            <li key={index} className="hover:opacity-10">
              <NavLinkItem
                bold="font-regular"
                href={item.href}
                label={item.label}
              />
            </li>
          ))}
        </ul>
        <div className="flex px-8 justify-end flex-col gap-3">
          <IconLink
            href="#"
            title={"Mail Us"}
            icon={<MailIcon fill="currentColor" />}
            ghost
            bold="font-regular"
          />
          <IconLink
            href="#"
            title={"Call Us"}
            icon={<PhoneIcon fill="currentColor" />}
            ghost
            bold="font-regular"
          />
        </div>
        <div className="flex px-8 justify-end flex-col gap-3">
          © 2024 Gulv Mestre AS
        </div>
      </div>
    </div>
  );
};

export default Footer;
