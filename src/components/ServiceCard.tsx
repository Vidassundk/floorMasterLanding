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
    <div className="group flex flex-col gap-0 transition-all">
      <div
        className={`py-20 2xl:py-24 h-full items-center flex flex-col px-8 text-center flex-grow xl:flex-grow-0 transition-all duration-100 ${
          mode === "dark"
            ? "text-white bg-brown border-foreground border-1"
            : "text-foreground border-foreground border-1 bg-sand"
        }`}
      >
        <div className="items-center flex flex-col gap-10 group-hover:-translate-y-4 xl:group-hover:-translate-y-2 duration-300">
          <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-3">
            {/* Icon with hover effect */}
            {icon}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <ul className="flex flex-col gap-4">
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
