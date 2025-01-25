"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle";
import NavLinkItem from "../NavLinkItem";
import FacebookIcon from "../icons/FacebookIcon";
import HorizontalGallery from "../HorizontalGallery";

interface GalleryBlockProps {
  sectionTitle: string;
  sectionSubtitle: string;
  navLinkLabel: string;
  socialPlatform: string; // Expecting a string like "on our {{logo}} Facebook"
  images: { src: string; alt: string }[];
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({
  sectionTitle,
  sectionSubtitle,
  navLinkLabel,
  socialPlatform,
  images,
}) => {
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const [titleLeftOffset, setTitleLeftOffset] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (sectionTitleRef.current) {
        const rect = sectionTitleRef.current.getBoundingClientRect();
        setTitleLeftOffset(rect.left); // Update the left position
      }
    };

    updatePosition(); // Initial position update
    window.addEventListener("resize", updatePosition); // Update on window resize
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  // Replace {{logo}} with a ReactNode containing the FacebookIcon
  const renderSocialPlatform = () => {
    const parts = socialPlatform.split("{{logo}}");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && (
          <span className="inline-flex items-center">
            <FacebookIcon />
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <section id="gallery-section" className="scroll-m-32">
      {/* Trackable Section Title */}
      <div>
        <SectionTitle
          containerRef={sectionTitleRef} // Pass the ref as required
          title={sectionTitle}
          subTitle={sectionSubtitle}
          rightSide={
            <div className="flex flex-row items-center justify-center">
              <NavLinkItem
                underline
                href="https://www.facebook.com/profile.php?id=61565412763854"
                target="_blank"
                label={navLinkLabel}
              />
              &nbsp;{renderSocialPlatform()}
            </div>
          }
        />
      </div>

      {/* Gallery */}
      <div className="mt-6">
        <HorizontalGallery
          paddingLeft={titleLeftOffset || undefined}
          images={images}
        />
      </div>
    </section>
  );
};

export default GalleryBlock;
