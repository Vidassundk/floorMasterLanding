import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  list: string[];
  mode: "dark" | "light";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  list,
  mode,
}) => {
  return (
    <div className="group flex flex-col h-full transition-all">
      {/* Card Container */}
      <div
        className={`
          px-8
          h-full
          text-center
          flex-grow
          xl:flex-grow-0
          transition-all
          duration-100
          ${
            mode === "dark"
              ? "text-white bg-brown border-foreground border-1"
              : "text-foreground border-foreground border-1 bg-sand"
          }
        `}
      >
        {/* 
          We define a 3-row grid:
            1) Icon row
            2) Title row
            3) List row
          This ensures that each item (icon, title, list) is in the same
          position across multiple cards.
          
          grid-rows-[auto, auto, 1fr]:
            Row 1: auto height (icon)
            Row 2: auto height (title)
            Row 3: takes remaining space (list)
          
          h-full + w-full ensure the card stretches fully in parent’s space.
          place-items-center aligns items both horizontally & vertically in each row.
        */}
        <div className="grid grid-rows-[80px,100px,1fr] h-full w-full py-20">
          <div className="h-full w-full flex justify-center items-end pb-4 transition-all duration-300">
            <div className="transition-all duration-300 group-hover:rotate-12 group-hover:pb-4 ">
              {icon}
            </div>
          </div>

          {/* Row 2: Title */}
          <h2 className="text-2xl font-bold flex items-center justify-center group-hover:pb-3 transition-all duration-300">
            {title}
          </h2>

          {/* Row 3: List */}
          <ul className="flex flex-col gap-4 h-full mt-4">
            {(list || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
