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
      // Update the state based on the current scroll position
      setIsScrolled(window.scrollY > 10);
    };

    // Check scroll position on initial render
    handleScroll();

    // Add the event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md bg-background" : "bg-transparent"
      }`}
    >
      <nav className="pb-2 pt-3 px-4 container mx-auto">
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
