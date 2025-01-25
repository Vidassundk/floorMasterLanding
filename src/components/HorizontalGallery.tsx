"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import IconButton from "./IconButton";
import ChevronIcon from "./icons/ChevronIcon";

interface HorizontalGalleryProps {
  images: { src: string; alt: string }[]; // Array of image objects
  paddingLeft?: number; // Right padding for the gallery container
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  images,
  paddingLeft,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const startPosition = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(startPosition);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const currentPosition = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = startX - currentPosition;
    containerRef.current.scrollLeft = scrollLeft + delta;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 400; // Amount to scroll per click
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateScrollState = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      updateScrollState(); // Initial state check
      container.addEventListener("scroll", updateScrollState); // Update on scroll
    }

    return () => {
      container?.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className={`flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        style={{
          scrollBehavior: "auto", // No scroll delay
          paddingLeft: paddingLeft,
          paddingRight: paddingLeft,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="shrink-0 w-screen h-[320px] sm:w-[600px] sm:h-[400px] lg:w-[800px] lg:h-[600px] xl:w-[900px] xl:h-[600px] relative overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              className="absolute inset-0 object-cover transition-transform duration-300 hover:scale-105 hover:translate-x-1"
              draggable={false} // Prevent default image dragging
            />
          </div>
        ))}
      </div>
      {/* Scroll Buttons Underneath */}
      <div className="container flex gap-4 mt-4 mx-auto">
        <IconButton
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          icon={<ChevronIcon direction="left" />}
          aria-label="Scroll left"
        />

        <IconButton
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          icon={<ChevronIcon direction="right" />}
          aria-label="Scroll right"
        />
      </div>
    </div>
  );
};

export default HorizontalGallery;
