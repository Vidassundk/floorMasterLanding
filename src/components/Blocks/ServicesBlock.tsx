import React from "react";
import SectionTitle from "../SectionTitle";
import LocationButton from "../LocationButton";
import ServiceCard from "../ServiceCard";

export interface ServicesBlockProps {
  sectionTitle: string;
  sectionSubtitle: string;
  locationButton: {
    title: string;
    ghost?: boolean;
  };
  services: {
    title: string;
    list: string[]; // Always an array of strings
    icon: React.ReactNode;
    mode: "dark" | "light";
    hasFooter?: boolean;
  }[];
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({
  sectionTitle,
  sectionSubtitle,
  locationButton,
  services,
}) => {
  return (
    <section id="services-section" className="scroll-m-32">
      <SectionTitle
        title={sectionTitle}
        subTitle={sectionSubtitle}
        rightSide={
          <a href="https://maps.app.goo.gl/kQR9o2LPJEfDHDi56" target="_blank">
            <LocationButton
              ghost={locationButton.ghost}
              title={locationButton.title}
            />
          </a>
        }
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto my-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            list={service.list}
            icon={service.icon}
            mode={service.mode}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesBlock;
