"use client";

import React, { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon";
import IconButton from "./IconButton";

// 1) Import your linkGroups hook and FooterLinkGroup
import { useLinkGroups } from "@/features/navigation/useLinkGroups";
import FooterLinkGroup from "./LinkFooterGroup";

import OldLogo from "@/features/navigation/components/OldLogo";

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // 2) Reuse the same groups from the footer
  const linkGroups = useLinkGroups();

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* The icon button that opens/closes the menu */}
      <IconButton
        onClick={isMenuOpen ? closeMenu : openMenu}
        icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      />

      {/*
        BACKDROP:
        A full-screen overlay behind the menu that blurs and dims the background.
        - If the menu is open, we show it with "opacity-100 pointer-events-auto".
        - If the menu is closed, "opacity-0 pointer-events-none" effectively hides it and prevents clicks.
      */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={closeMenu}
      />

      {/* SLIDING MENU: 
          We use a higher z-index (z-50) so it's above the backdrop (z-40).
      */}
      <div
        className={`
          fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="p-4">
          <IconButton icon={<CloseIcon />} onClick={closeMenu} />
        </div>

        {/* 
          Map over the same link groups that the footer uses
          Use a <div> or <button> instead of <a> to wrap the group, 
          so clicking any part of the group triggers closeMenu if desired.
        */}
        <div className="p-4 flex flex-col gap-6 text-foreground">
          <div className="pb-4">
            <OldLogo />
          </div>
          {linkGroups.map((group) => (
            <div
              key={group.title}
              onClick={closeMenu}
              className="cursor-pointer"
            >
              <FooterLinkGroup
                title={group.title}
                links={group.links}
                textColor="text-foreground"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
