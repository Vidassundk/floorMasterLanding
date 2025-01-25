"use client";

import React from "react";
import FooterLinkItem from "./FooterLinkItem";

interface FooterLinkGroupProps {
  title: string;
  links?: { href: string; text: string; target?: string }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase">
        {title}
      </h2>
      <ul className="text-white font-medium">
        {links?.map((link) => (
          <FooterLinkItem
            target={link.target}
            key={link.href}
            href={link.href}
            text={link.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
