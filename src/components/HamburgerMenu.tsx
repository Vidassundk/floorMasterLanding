"use client";

import React, { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import CloseIcon from "./icons/CloseIcon"; // Optional close icon
import IconButton from "./IconButton";
import NavLinkItem, { MenuItem } from "./NavLinkItem";

interface HamburgerMenuProps {
  navigationItems: MenuItem[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ navigationItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <div>
      <IconButton
        onClick={toggleMenu}
        icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      />

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </button>
        </div>
        <ul className="mt-4  p-4 divide-y">
          {navigationItems.map((item, index) => (
            <li className="px-2 py-3" key={index}>
              <NavLinkItem
                onClick={() => setMenuOpen(false)}
                href={item.href}
                label={item.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
