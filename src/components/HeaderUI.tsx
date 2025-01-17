import React from "react";

interface HeaderUIProps {
  logo: React.ReactNode;
  navigationElement: React.ReactNode;
  ctaElements: React.ReactNode;
}

const HeaderUI: React.FC<HeaderUIProps> = ({
  logo,
  navigationElement,
  ctaElements,
}) => {
  return (
    <header>
      <nav className="px-6 py-8">
        <div className="flex justify-between items-center">
          <div>{logo}</div>
          {navigationElement && navigationElement}
          {ctaElements && ctaElements}
        </div>
      </nav>
    </header>
  );
};

export default HeaderUI;
