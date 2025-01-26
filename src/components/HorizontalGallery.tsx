"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import IconButton from "./IconButton";
import ChevronIcon from "./icons/ChevronIcon";

interface HorizontalGalleryProps {
  images: { src: string; alt: string }[];
  paddingLeft?: number;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  images,
  paddingLeft = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [viewportWidth, setViewportWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Capture and update the viewport width
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize(); // Update on mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse / Touch events for drag-scrolling
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

  // Programmatic scrolling
  const scroll = (direction: "left" | "right") => {
    const scrollAmount = galleryItemWidth + gap;
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const gap = 20;

  // Update scroll state (left/right button states)
  const updateScrollState = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  // Whenever containerRef changes or on mount
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Initial scroll state
      updateScrollState();
      // Listen on scroll events
      container.addEventListener("scroll", updateScrollState);
    }
    return () => {
      container?.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  // 1) Compute available base width
  const baseWidth = Math.max(viewportWidth - paddingLeft * 2, 0);

  // 2) If viewport ≥ 1024px (lg breakpoint), use half; otherwise use full
  const isLG = viewportWidth >= 1024;
  const galleryItemWidth = isLG ? baseWidth / 2 - gap / 2 : baseWidth;

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className={`flex overflow-x-auto scrollbar-hide ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        style={{
          scrollBehavior: "auto",
          paddingLeft,
          paddingRight: paddingLeft,
          gap: `${gap}px`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="shrink-0 relative overflow-hidden select-none"
            style={{
              width: galleryItemWidth,
              height: galleryItemWidth * 0.7,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="absolute inset-0 object-cover transition-transform duration-300 hover:scale-105 select-none"
              draggable={false}
              // When the image has loaded, update the scroll state
              onLoadingComplete={() => {
                updateScrollState();
              }}
            />
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="container flex gap-4 mt-4 mx-auto justify-center sm:justify-start">
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
