"use client";

import React, { useRef } from "react";
import SectionTitle from "../SectionTitle";
import NavLinkItem from "../NavLinkItem";
import FacebookIcon from "../icons/FacebookIcon";

import GridGallery from "../GridGallery";

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
        <GridGallery images={images} />
      </div>
    </section>
  );
};

export default GalleryBlock;
