import React from "react";
import Pin from "./icons/Pin";
import StarIcon from "./icons/StarIcon";
import GoogleIcon from "./icons/GoogleIcon";

interface LocationButtonProps {
  title: string;
  ghost?: boolean;
  starRating?: number;
  showRating?: boolean;
  ratingText?: string;
  ratingNumber?: number;
  show?: boolean;
}

const LocationButton: React.FC<LocationButtonProps> = ({
  title,
  ghost = false,
  starRating,
  showRating = false,
  ratingText,
  ratingNumber,
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

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
          {Array.from({ length: fullStars }).map((_, index) => (
            <StarIcon
              key={`full-${index}`}
              variant="full"
              fill="currentColor"
            />
          ))}
          {halfStar && <StarIcon variant="half" fill="currentColor" />}
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
      style={{ opacity: starRating && ratingNumber ? 1 : 0 }}
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
