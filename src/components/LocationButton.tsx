import React from "react";
import Pin from "./icons/Pin";
import StarIcon from "./icons/StarIcon";
import GoogleIcon from "./icons/GoogleIcon";

interface LocationButtonProps {
  title: string; // Location title
  ghost?: boolean; // Whether the button is transparent
  starRating?: number; // Accepts ratings from 0 to 5, including decimals like 3.5
  showRating?: boolean; // Toggle whether to show the star rating
  ratingText?: string; // Text for "Loved by {{number}} customers"
  ratingNumber?: number; // The number to replace in the rating text
}

const LocationButton: React.FC<LocationButtonProps> = ({
  title,
  ghost = false,
  starRating = 0, // Default to 0 if not provided
  showRating = false, // Default to showing the rating
  ratingText,
  ratingNumber = 0, // Default rating number
}) => {
  // Render stars based on the rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Half star if remainder >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    // Replace {{number}} in the rating text with the actual ratingNumber
    const formattedRatingText = ratingText?.replace(
      "{{number}}",
      String(ratingNumber)
    );

    return (
      <div className="flex flex-row items-center gap-4">
        <div className="hidden group-hover:block">
          <GoogleIcon fill="white" />
        </div>
        <div className="group-hover:hidden">
          <GoogleIcon />
        </div>

        <div
          className="flex flex-row items-center gap-1 text-[#FFD700]"
          aria-label={`Rating: ${rating} out of 5 stars`}
        >
          {/* Render full stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <StarIcon
              key={`full-${index}`}
              variant="full"
              fill="currentColor"
            />
          ))}
          {/* Render half star if applicable */}
          {halfStar && <StarIcon variant="half" fill="currentColor" />}
          {/* Render empty stars */}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <StarIcon key={`empty-${index}`} variant="empty" fill="#D3D3D3" />
          ))}
        </div>
        <p className="pt-[2px] hidden lg:block leading-none">
          {formattedRatingText}
        </p>
        <div className={`w-[2px] rounded-full bg-gray-200 h-8`}></div>
      </div>
    );
  };

  return (
    <button
      className={`group flex flex-row items-center justify-center py-2 rounded-xl transition-all gap-2 ${
        ghost
          ? "bg-transparent hover:bg-opacity-50"
          : "bg-white hover:bg-gulvGreen text-foreground hover:text-white px-4"
      }`}
    >
      {showRating && starRating !== undefined && renderStars(starRating)}
      <span
        className={`${
          ghost ? "text-gulvGreen" : "text-gulvGreen group-hover:text-white"
        } transition-colors`}
      >
        <Pin />
      </span>
      <div className="flex flex-col items-start">
        <p className="flex flex-row gap-2 font-medium items-center text-lg">
          {title}
        </p>
      </div>
    </button>
  );
};

export default LocationButton;
