"use client";

import React from "react";
import Image from "next/image";

interface GridGalleryItemProps {
  src: string;
  alt: string;
  onClick?: () => void; // callback to open preview
}

const GridGalleryItem: React.FC<GridGalleryItemProps> = ({
  src,
  alt,
  onClick,
}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {/* 
        Use next/image for optimized images.
        The parent container must have position: relative 
        or a fixed width/height when using 'fill'.
      */}
      <div className="relative h-auto w-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={500} // example dims; or use fill if you have a fixed container
          height={400}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default GridGalleryItem;
