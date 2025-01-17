"use client";

import React, { useState } from "react";
import NavLinkItem from "./NavLinkItem";
import ChevronIcon from "./icons/ChevronIcon";
import { SubMenuItem } from "./SubMenu";

interface AccordionProps {
  label: string;
  subMenu?: SubMenuItem[];
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ label, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between items-center w-full cursor-pointer"
      >
        <NavLinkItem label={label} />
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronIcon size={14} />
        </div>
      </div>

      <ul
        className={`overflow-hidden transition-[max-height] mt-2 duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {subMenu?.map((item, index) => (
          <li className="py-3" key={index}>
            <NavLinkItem
              key={index}
              label={
                <div className="flex flex-row items-center gap-2">
                  <div className="w-4 h-4 flex items-center">{item?.flag}</div>
                  {item?.label}
                </div>
              }
              onClick={item?.onClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
