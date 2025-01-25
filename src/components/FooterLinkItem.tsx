"use client";

import React from "react";

interface FooterLinkItemProps {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({
  href,
  text,
  className = "",
  target,
}) => {
  return (
    <li className="mb-4">
      <a href={href} target={target} className={`hover:underline ${className}`}>
        {text}
      </a>
    </li>
  );
};

export default FooterLinkItem;
