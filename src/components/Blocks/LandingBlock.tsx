"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import LocationButton from "../LocationButton";
import Button from "../Button";
import Image from "next/image";

interface LandingBlockProps {
  locationButton: {
    title: string;
    starRating?: number;
    ratingText: string;
    ratingNumber?: number;
  };
  title: string;
  primaryButton: {
    text: string;
    href: string;
    icon: React.ReactNode;
    accessibilityLabel: string;
  };
  secondaryButton: {
    text: string;
    href: string;
    icon: React.ReactNode;
    accessibilityLabel: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
}

const LandingBlock: React.FC<LandingBlockProps> = ({
  locationButton,
  title,
  primaryButton,
  secondaryButton,
  images,
}) => {
  // Track loading state for each image
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    () => images.map(() => true) // all true (loading) initially
  );

  // Handler to mark an image as loaded
  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <section
      className="relative"
      style={{
        paddingTop: "115px",
      }}
    >
      <div className="flex flex-col justify-between h-full gap-y-16 mx-auto lg:pb-16 lg:px-12">
        {/* Hero Section: Location Button + Title + Buttons */}
        <div className="flex flex-col items-center transition-all duration-100 justify-center text-center gap-y-2 md:gap-y-8">
          <motion.a
            target="_blank"
            href="https://maps.app.goo.gl/kQR9o2LPJEfDHDi56"
            className="inline-flex justify-between items-center pb-8 lg:pb-4 px-1 pr-4"
            role="alert"
            key={`${locationButton.ratingText}-${locationButton.ratingNumber}`} // Ensure re-render when props change
            initial={{ opacity: 0 }} // Start hidden
            animate={{
              opacity:
                locationButton.ratingText && locationButton.ratingNumber
                  ? 1
                  : 0,
            }} // Fade in only when valid
            transition={{ duration: 0.3, ease: "easeIn" }} // Smooth fade-in
          >
            {locationButton.ratingText &&
              locationButton.ratingNumber && ( // Render only if valid
                <LocationButton
                  title={locationButton.title}
                  starRating={locationButton.starRating}
                  ratingText={locationButton.ratingText}
                  ratingNumber={locationButton.ratingNumber}
                  showRating={true}
                />
              )}
          </motion.a>

          {/* Title with Motion */}
          <motion.h1
            className="text-4xl px-4 font-black tracking-tight leading-tight md:text-5xl lg:text-7xl xl:text-8xl text-foreground max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
          >
            {title}
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10"
          >
            <Button
              href={primaryButton.href}
              text={primaryButton.text}
              icon={primaryButton.icon}
              className="text-base bg-gulvGreen hover:opacity-90 focus:ring-gray-300 text-slate-50"
              accessabilityLabel={primaryButton.accessibilityLabel}
            />
            <Button
              href={secondaryButton.href}
              text={secondaryButton.text}
              icon={secondaryButton.icon}
              className="text-base bg-foreground hover:opacity-90 focus:ring-gray-300 text-slate-50"
              accessabilityLabel={secondaryButton.accessibilityLabel}
            />
          </motion.div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container xl:container-none w-full mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative w-full overflow-hidden group ${
                index === 0 ? "" : "hidden lg:block"
              }`}
              style={{ paddingBottom: "65%" }}
              initial={{ opacity: 0, y: 50 + index * 10 }} // Different y values for staggered effect
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }} // Slight delay for staggered effect
            >
              {/* Skeleton overlay */}
              <div
                className={`
          absolute inset-0 
          bg-gray-200 
          animate-pulse 
          transition-opacity 
          duration-500 
          ${loadingStates[index] ? "opacity-100" : "opacity-0"}
        `}
              />

              {/* Next Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="absolute inset-0 object-cover transition-transform duration-1000 group-hover:scale-150"
                style={{ transformOrigin: "center bottom" }}
                onLoadingComplete={() => handleImageLoad(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
