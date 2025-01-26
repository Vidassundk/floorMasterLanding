"use client";

import React, { useState } from "react";
import Image from "next/image";
import IconButton from "./IconButton";
import CloseIcon from "./icons/CloseIcon";
import ChevronIcon from "./icons/ChevronIcon";

interface GridGalleryProps {
  images: { src: string; alt: string }[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPreview = (index: number) => setSelectedIndex(index);
  const closePreview = () => setSelectedIndex(null);

  const goPrevious = () => {
    setSelectedIndex((prev) => (prev !== null ? prev - 1 : null));
  };
  const goNext = () => {
    setSelectedIndex((prev) => (prev !== null ? prev + 1 : null));
  };

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* Responsive grid: 2 cols on small, 3 on md+ */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => openPreview(index)}
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen preview overlay */}
      {currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          {/* Close button (top-right, always visible) */}
          <div className="absolute top-4 right-4">
            <IconButton
              icon={<CloseIcon fill="white" />}
              onClick={closePreview}
            />
          </div>

          <div className="relative w-auto max-w-4xl h-auto flex flex-col items-center">
            {/* The main preview image */}
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="rounded"
            />

            {/* MOBILE ARROWS: displayed below the image on small screens */}
            <div className="mt-4 flex gap-4 md:hidden">
              {/* Show the left arrow if not at the first image */}
              {selectedIndex !== 0 && (
                <IconButton
                  extraClasses="text-white focus:text-foreground hover:text-foreground"
                  onClick={goPrevious}
                  icon={
                    <ChevronIcon
                      size={20}
                      fill="currentColor"
                      direction="left"
                    />
                  }
                />
              )}

              {/* Show the right arrow if not at the last image */}
              {selectedIndex !== images.length - 1 && (
                <IconButton
                  extraClasses="text-white focus:text-foreground hover:text-foreground"
                  onClick={goNext}
                  icon={
                    <ChevronIcon
                      size={20}
                      direction="right"
                      fill="currentColor"
                    />
                  }
                />
              )}
            </div>
          </div>

          {/* DESKTOP ARROWS: absolute side arrows, only visible on md+ */}
          {/* Left Arrow */}
          {selectedIndex !== 0 && (
            <div className="hidden md:block absolute left-4">
              <IconButton
                extraClasses="text-white focus:text-foreground hover:text-foreground"
                onClick={goPrevious}
                icon={
                  <ChevronIcon size={20} fill="currentColor" direction="left" />
                }
              />
            </div>
          )}
          {/* Right Arrow */}
          {selectedIndex !== images.length - 1 && (
            <div className="hidden md:block absolute right-4">
              <IconButton
                extraClasses="text-white focus:text-foreground hover:text-foreground"
                onClick={goNext}
                icon={
                  <ChevronIcon
                    size={20}
                    direction="right"
                    fill="currentColor"
                  />
                }
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GridGallery;
