import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
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
    <motion.section
      id="services-section"
      className="scroll-m-32"
      initial={{ opacity: 0, y: 50 }} // Start hidden & move up
      animate={{ opacity: 1, y: 0 }} // Fade in & move to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
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
            <motion.div
              key={index}
              style={marginStyle}
              className="transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 + index * 10 }} // Each service fades in & moves up with a different speed
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }} // Staggered effect
            >
              <ServiceCard
                title={service.title}
                list={service.list}
                icon={service.icon}
                mode={service.mode}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ServicesBlock;
