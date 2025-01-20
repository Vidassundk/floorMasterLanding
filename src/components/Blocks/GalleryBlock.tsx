"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle";

import NavLinkItem from "../NavLinkItem";
import FacebookIcon from "../icons/FacebookIcon";
import HorizontalGallery from "../HorizontalGallery";
const images = [
  { src: "/photos/1.jpg", alt: "Parquet 1" },
  { src: "/photos/2.jpg", alt: "Parquet 2" },
  { src: "/photos/3.jpg", alt: "Parquet 3" },
  { src: "/photos/4.jpg", alt: "Parquet 4" },
  { src: "/photos/5.jpg", alt: "Parquet 5" },
];
const GalleryBlock = () => {
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

  return (
    <div>
      {/* Trackable Section Title */}
      <div>
        <SectionTitle
          ref={sectionTitleRef}
          title="Gallery"
          subTitle="Photos of our work"
          rightSide={
            <div className="flex flex-row items-center justify-center">
              <NavLinkItem underline label="See More" /> &nbsp;on our{" "}
              <FacebookIcon /> Facebook
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
    </div>
  );
};

export default GalleryBlock;
