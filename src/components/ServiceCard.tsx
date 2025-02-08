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
    <div className="flex flex-col h-full transition-all">
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
        <div className="grid grid-rows-[80px,100px,1fr] h-full w-full py-20">
          <div className="h-full w-full flex justify-center items-end pb-4 transition-all duration-300">
            <div className="transition-all duration-300">{icon}</div>
          </div>

          <h2 className="text-2xl font-bold flex items-center justify-center transition-all duration-300">
            {title}
          </h2>

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
