import React from "react";
import Pin from "./icons/Pin";

interface LocationButtonProps {
  title: string;
  ghost?: boolean;
}

const LocationButton: React.FC<LocationButtonProps> = ({
  title,
  ghost = false,
}) => {
  return (
    <button
      className={`group flex flex-row items-center justify-center py-2 rounded-full transition-all gap-2 ${
        ghost
          ? "bg-transparent hover:bg-opacity-50"
          : "bg-sand hover:bg-gulvGreen text-foreground hover:text-white px-4"
      }`}
    >
      <span
        className={`${
          ghost ? "text-gulvGreen" : "text-gulvGreen group-hover:text-white"
        } transition-colors`}
      >
        <Pin />
      </span>
      <p className="flex flex-row gap-2 font-medium items-center text-lg">
        {title}
      </p>
    </button>
  );
};

export default LocationButton;
