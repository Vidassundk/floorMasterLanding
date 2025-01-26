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
      {/* Responsive grid: 1 col on xs, 2 cols on sm, 3 on md+ */}
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
          {/* Close button (top-right) */}
          <div className="absolute z-50 top-4 right-4">
            <IconButton
              icon={<CloseIcon fill="white" />}
              onClick={closePreview}
            />
          </div>

          {/* The main preview image (centered) */}
          <div className="relative w-auto max-w-4xl h-auto flex flex-col items-center">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="rounded"
            />
          </div>

          {/* LEFT HALF OVERLAY (Prev) */}
          {selectedIndex !== 0 && (
            <div
              onClick={goPrevious}
              className="absolute top-0 left-0 h-full w-1/2 cursor-pointer flex items-center justify-start"
            >
              {/* 
                Arrow icon as purely visual indicator 
                - pointer-events-none ensures clicks go to parent
              */}
              <div className="ml-4 text-white pointer-events-none">
                <ChevronIcon direction="left" size={20} fill="currentColor" />
              </div>
            </div>
          )}

          {/* RIGHT HALF OVERLAY (Next) */}
          {selectedIndex !== images.length - 1 && (
            <div
              onClick={goNext}
              className="absolute top-0 right-0 h-full w-1/2 cursor-pointer flex items-center justify-end"
            >
              <div className="mr-4 text-white pointer-events-none">
                <ChevronIcon direction="right" size={20} fill="currentColor" />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GridGallery;
