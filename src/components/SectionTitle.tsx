import React from "react";

interface SectionTitleProps {
  title: string;
  rightSide?: React.ReactNode;
  subTitle?: string;
  ref?: React.RefObject<HTMLDivElement>;
  dark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  rightSide,
  subTitle,
  ref,
  dark = false,
}) => {
  return (
    <div
      className={`container mx-auto flex-col lg:flex-row flex justify-between mt-4 gap-4 ${
        dark ? "text-background" : "text-foreground"
      }`}
    >
      <div
        ref={ref}
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
      {rightSide}
    </div>
  );
};

export default SectionTitle;
