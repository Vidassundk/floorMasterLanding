"use client";

import React from "react";

export interface MenuItem {
  label: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
  subMenu?: MenuItem[];
}

const NavLinkItem: React.FC<MenuItem> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-base font-semibold font-inter cursor-pointer hover:opacity-80"
    >
      {label}
    </a>
  );
};

export default NavLinkItem;
