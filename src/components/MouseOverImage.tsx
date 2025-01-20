"use client";
import React, { useState } from "react";
import Image from "next/image";
import HoverGraphic from "react-hover-graphic";

interface MouseOverImageProps {
  children: React.ReactNode;
  src: string;
  alt: string;
  imageWidth: number; // Original width of the image
  imageHeight: number; // Original height of the image
  scale?: number; // Scale factor for hover image size
}

const MouseOverImage: React.FC<MouseOverImageProps> = ({
  children,
  src,
  alt,
  imageWidth,
  imageHeight,
  scale = 1.5, // Default scale factor
}) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Calculate scaled dimensions:
  const scaledWidth = imageWidth * scale;
  const scaledHeight = imageHeight * scale;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ display: "inline-block" }}
    >
      {/* Children (wrapped content) */}
      {children}

      {/* Hover Image */}
      {hovered && (
        <div
          className={`fixed pointer-events-none transition-transform duration-300 ease-out ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            left: position.x,
            top: position.y,
            width: scaledWidth,
            height: scaledHeight,
            // Position the left-bottom corner of the image at the cursor
            transform: "translate(0, -100%)",
            zIndex: 50,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            layout="intrinsic"
            className="rounded-md shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default MouseOverImage;
