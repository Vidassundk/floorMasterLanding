import React from "react";
import LocationButton from "../LocationButton";
import Button from "../Button";
import Image from "next/image";

interface LandingBlockProps {
  locationButton: {
    title: string;
    starRating: number;
    ratingText: string;
    ratingNumber: number;
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
  return (
    <section
      className="relative"
      style={{
        paddingTop: "115px",
      }}
    >
      <div className="flex flex-col justify-between h-full gap-y-16 mx-auto lg:pb-16 lg:pt-8 lg:px-12">
        {/* Hero Section: Location Button + Title + Buttons */}
        <div className="flex flex-col items-center justify-center text-center gap-y-2 md:gap-y-8">
          <a
            target="_blank"
            href="https://maps.app.goo.gl/kQR9o2LPJEfDHDi56"
            className="inline-flex justify-between items-center pb-8 lg:pb-4 px-1 pr-4"
            role="alert"
          >
            <LocationButton
              title={locationButton.title}
              starRating={locationButton.starRating}
              showRating={true}
              ratingText={locationButton.ratingText}
              ratingNumber={locationButton.ratingNumber}
            />
          </a>
          <h1 className="text-4xl px-4 font-extrabold tracking-tight leading-tight md:text-5xl lg:text-7xl xl:text-8xl text-foreground max-w-6xl mx-auto">
            {title}
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
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
          </div>
        </div>
        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container xl:container-none w-full mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full overflow-hidden group ${
                index === 0 ? "" : "hidden lg:block"
              }`}
              style={{ paddingBottom: "65%" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill={true}
                className="absolute inset-0 object-cover transition-transform duration-1000 group-hover:scale-150"
                style={{ transformOrigin: "center bottom" }} // Focus zoom on the bottom
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
