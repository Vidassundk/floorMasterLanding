import React from "react";

interface SectionTitleProps {
  title: string;
  rightSide?: React.ReactNode;
  subTitle?: string;

  containerRef?: React.RefObject<HTMLDivElement | null>; // Accept null explicitly

  dark?: boolean;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  rightSide,
  subTitle,
  containerRef,
  dark = false,
}) => {
  return (
    <div
      className={`container px-4 lg:px-0 mx-auto flex-col lg:flex-row flex justify-between mt-4 gap-4 ${
        dark ? "text-background" : "text-foreground"
      }`}
    >
      <div
        ref={containerRef} // Use the renamed prop here
        className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 `}
      >
        {/* Title and Subtitle with a Vertical Divider */}
        <h2 className="text-3xl font-bold text-wrap lg:text-nowrap">{title}</h2>
        <div
          className={`w-[2px] rounded-full hidden lg:block ${
            dark ? "bg-background" : "bg-foreground"
          } h-8`}
        ></div>
        <p className="text-[15px] font-normal max-w-xs line-clamp-2 leading-none">
          {subTitle}
        </p>
      </div>
      {/* Right Side Content */}
      <div className="flex">{rightSide}</div>
    </div>
  );
};

export default SectionTitle;
