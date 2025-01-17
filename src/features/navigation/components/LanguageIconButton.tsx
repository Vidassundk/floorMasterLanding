"use client";

import React from "react";
import SubMenuButton from "@/components/SubMenuButton";
import IconButton from "@/components/IconButton";
import { SubMenuItem } from "@/components/SubMenu";

interface LanguageIconButtonProps {
  subMenu: SubMenuItem[];
  icon: React.ReactNode;
}

const LanguageIconButton: React.FC<LanguageIconButtonProps> = ({
  subMenu,
  icon,
}) => {
  return (
    <SubMenuButton subMenu={subMenu} align="right">
      <IconButton icon={icon} />
    </SubMenuButton>
  );
};

export default LanguageIconButton;
