"use client";

import React, { useState, ReactNode, useRef, useEffect } from "react";
import SubMenu, { SubMenuItem } from "@/components/SubMenu";

interface SubMenuButtonProps {
  subMenu?: SubMenuItem[];
  extraStyles?: string;
  children: ReactNode;
  align?: "left" | "right";
}

const SubMenuButton: React.FC<SubMenuButtonProps> = ({
  subMenu,
  extraStyles = "",
  children,
  align = "right",
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Prevent clicks from bubbling to the document
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      // Close only if the click is outside the container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={containerRef} className={`relative ${extraStyles}`}>
      {/* Prevent default anchor behavior */}
      <div onClick={handleToggle} className="cursor-pointer">
        {children}
      </div>
      {subMenu && (
        <SubMenu
          items={subMenu}
          isOpen={isDropdownOpen}
          onClose={() => setDropdownOpen(false)}
          align={align}
        />
      )}
    </div>
  );
};

export default SubMenuButton;
