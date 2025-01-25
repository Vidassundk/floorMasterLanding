import React from "react";

interface StarIconProps {
  size?: number; // Size of the icon
  fill?: string; // Fill color for filled stars
  emptyFill?: string; // Fill color for unfilled parts of the star
  variant?: "full" | "half" | "empty"; // Specifies star type
}

const StarIcon: React.FC<StarIconProps> = ({
  size = 21,
  fill = "#FFD700", // Default to gold for filled stars
  emptyFill = "#D3D3D3", // Default to light gray for unfilled parts
  variant = "full", // Default to full star
}) => {
  const isHalf = variant === "half";
  const isEmpty = variant === "empty";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="half-clip">
          <rect x="0" y="0" width="10.5" height="20" /> {/* Half width */}
        </clipPath>
      </defs>
      {/* Base star shape with empty fill */}
      <path
        d="M10.4565 0.397461L13.9125 6.28994L20.6238 7.73315L16.0485 12.8181L16.7402 19.6025L10.4565 16.8527L4.17266 19.6025L4.86439 12.8181L0.289062 7.73315L7.00037 6.28994L10.4565 0.397461Z"
        fill={emptyFill} // Empty fill color
      />
      {/* Conditional full or half overlay */}
      {!isEmpty && (
        <path
          d="M10.4565 0.397461L13.9125 6.28994L20.6238 7.73315L16.0485 12.8181L16.7402 19.6025L10.4565 16.8527L4.17266 19.6025L4.86439 12.8181L0.289062 7.73315L7.00037 6.28994L10.4565 0.397461Z"
          fill={fill} // Fill color for full/half star
          clipPath={isHalf ? "url(#half-clip)" : undefined} // Clip to half if half star
        />
      )}
    </svg>
  );
};

export default StarIcon;
