"use client";

import React from "react";

export interface MenuItem {
  label: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
  subMenu?: MenuItem[];
  underline?: boolean;
  bold?: string;
}

const NavLinkItem: React.FC<MenuItem> = ({
  href,
  label,
  onClick,
  underline,
  bold = "font-semibold",
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block text-base ${bold} font-inter cursor-pointer hover:opacity-80 ${
        underline ? "underline" : ""
      }`}
    >
      {label}
    </a>
  );
};

export default NavLinkItem;
