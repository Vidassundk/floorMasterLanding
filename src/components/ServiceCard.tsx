import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  list: string[];
  mode: "dark" | "light";
  hasFooter?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  list,
  mode,
  hasFooter = true,
}) => {
  return (
    <div
      className={`group flex flex-col ${
        hasFooter ? "gap-4" : "gap-0"
      } transition-all`}
    >
      <div
        className={`rounded-lg py-20 2xl:py-28 items-center flex flex-col px-4 text-center flex-grow xl:flex-grow-0 transition-all duration-300 ${
          mode === "dark"
            ? "text-white bg-brown group-hover:bg-gulvGreen group-hover:text-white"
            : "text-foreground bg-sand group-hover:bg-gulvGreen group-hover:text-white"
        } ${hasFooter && "group-hover:pt-16 group-hover:pb-24"}`}
      >
        <div
          className={`items-center flex flex-col gap-10 ${
            !hasFooter &&
            "group-hover:-translate-y-4 xl:group-hover:-translate-y-12 duration-300"
          }`}
        >
          {icon}
          <h2 className="text-2xl font-bold">{title}</h2>
          <ul className="flex flex-col gap-4">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {hasFooter && (
        <div
          className={`xl:flex-grow rounded-lg hidden xl:block transition-all ${
            mode === "dark"
              ? "bg-foreground group-hover:bg-gulvGreen"
              : "bg-sand group-hover:bg-gulvGreen"
          }`}
        />
      )}
    </div>
  );
};

export default ServiceCard;
