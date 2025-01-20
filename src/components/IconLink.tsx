"use client";

import React from "react";

export interface IconLinkProps {
  title: string | React.ReactNode;
  icon?: React.ReactNode; // Icon is optional
  href?: string;
  onClick?: () => void;
  ghost?: boolean;
  underline?: boolean;
  bold?: string;
  iconSize?: number; // Size of the reserved square space for the icon
}

const IconLink: React.FC<IconLinkProps> = ({
  title,
  icon,
  href,
  onClick,
  ghost = false,
  underline = false,
  bold = "font-semibold",
  iconSize = 20, // Default square size for the icon
}) => {
  const baseStyles = `flex items-center gap-4 text-base ${bold} font-inter cursor-pointer hover:opacity-80`;
  const ghostStyles = ghost
    ? "bg-transparent hover:bg-opacity-50"
    : "bg-sand hover:bg-gulvGreen text-foreground hover:text-white px-4 py-2 rounded-full";

  const underlineStyle = underline ? "underline" : "";

  const iconContainerStyles = {
    width: iconSize,
    height: iconSize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${ghostStyles} ${underlineStyle}`}
      >
        {icon && <span style={iconContainerStyles}>{icon}</span>}
        {title}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${ghostStyles} ${underlineStyle}`}
    >
      {icon && <span style={iconContainerStyles}>{icon}</span>}
      {title}
    </button>
  );
};

export default IconLink;
