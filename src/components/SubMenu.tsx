"use client";

import React from "react";

export interface SubMenuItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  flag?: React.ReactNode;
}

interface SubMenuProps {
  items: SubMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  align?: "left" | "right";
}

const SubMenu: React.FC<SubMenuProps> = ({
  items,
  isOpen,
  onClose,
  align = "left",
}) => {
  return (
    <ul
      className={`
        absolute mt-2 bg-white border border-gray-200 rounded shadow-lg
        transform transition-all ease-in-out
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
        ${align === "right" ? "right-0" : "left-0"}
      `}
    >
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => {
              item.onClick?.();
              onClose();
            }}
            className="flex text-base items-center gap-3 px-6 py-2 text-foreground
                       font-semibold  hover:bg-gray-100 w-full text-left"
          >
            {item.icon && (
              <span className="h-5 min-h-5 w-5 min-w-5 flex items-center ">
                {item.icon}
              </span>
            )}
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
