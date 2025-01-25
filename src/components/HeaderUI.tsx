import React, { useState, useEffect } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 right-0 left-0 z-50  transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md bg-background" : "bg-transparent"
      }`}
    >
      <nav className="py-6 px-4 container mx-auto">
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
