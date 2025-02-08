"use client";

import Link from "next/link";
import React from "react";

export interface MenuItem {
  label: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
  underline?: boolean;
  bold?: string;
  target?: string;
}

const NavLinkItem: React.FC<MenuItem> = ({
  href,
  label,
  onClick,
  underline,
  bold = "font-semibold",
  target,
}) => {
  return (
    <Link
      target={target}
      href={href || ""}
      onClick={onClick}
      className={`block ${bold} cursor-pointer hover:opacity-80  ${
        underline ? "underline" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLinkItem;
