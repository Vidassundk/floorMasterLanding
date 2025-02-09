import React, { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import LocationButton from "../LocationButton";
import ServiceCard from "../ServiceCard";

export interface ServicesBlockProps {
  sectionTitle: string;
  sectionSubtitle: string;
  locationButton: {
    title: string;
    ghost?: boolean;
  };
  services: {
    title: string;
    list: string[];
    icon: React.ReactNode;
    mode: "dark" | "light";
    hasFooter?: boolean;
  }[];
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({
  sectionTitle,
  sectionSubtitle,
  locationButton,
  services,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  // Generate random margins for each card
  const getRandomMargin = () => (Math.random() * 40 + 10).toFixed(0) + "px"; // Between 20px - 80px

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind lg breakpoint (1024px)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services-section" className="scroll-m-32">
      <SectionTitle
        title={sectionTitle}
        subTitle={sectionSubtitle}
        rightSide={
          <a href="https://maps.app.goo.gl/kQR9o2LPJEfDHDi56" target="_blank">
            <LocationButton
              ghost={locationButton.ghost}
              title={locationButton.title}
            />
          </a>
        }
      />
      <div
        id="services-cards"
        className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto my-6 transition-all duration-300"
        onMouseEnter={() => isLargeScreen && setHovered(true)}
        onMouseLeave={() => isLargeScreen && setHovered(false)}
      >
        {services.map((service, index) => {
          const marginStyle =
            hovered && isLargeScreen
              ? index % 2 === 0
                ? { paddingTop: getRandomMargin() }
                : { paddingBottom: getRandomMargin() }
              : {};

          return (
            <div
              key={index}
              style={marginStyle}
              className="transition-all duration-300 ease-in-out"
            >
              <ServiceCard
                title={service.title}
                list={service.list}
                icon={service.icon}
                mode={service.mode}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesBlock;
