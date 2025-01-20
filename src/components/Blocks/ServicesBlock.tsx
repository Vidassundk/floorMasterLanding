import React from "react";
import SectionTitle from "../SectionTitle";
import LocationButton from "../LocationButton";
import ServiceCard from "../ServiceCard";
import ParquetIcon from "../icons/ParquetIcon";
import ParquetTwoIcon from "../icons/ParquetTwoIcon";
import BrushIcon from "../icons/BrushIcon";
import LightBulb from "../icons/LightBulb";

const ServicesBlock = () => {
  return (
    <div>
      <SectionTitle
        title="Professional Flooring Services"
        subTitle="Fast, precise, and professional work execution ensuring top results"
        rightSide={<LocationButton ghost title={"Rogalando"} />}
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto my-6">
        <ServiceCard
          title={"Floor Installation Services"}
          list={["Laminate", "Parquet", "Vinyl", "Adhesive"]}
          icon={<ParquetIcon />}
          mode="dark"
          hasFooter={false}
        />
        <ServiceCard
          title={"Custom Flooring Solutions"}
          list={["Herringbone Pattern", "French Herringbone Pattern"]}
          icon={<ParquetTwoIcon />}
          mode="light"
        />
        <ServiceCard
          title={"Floor Renovation Services"}
          list={[
            "Sanding Old Floors",
            "Varnishing Floors",
            "Floor replacement ",
          ]}
          icon={<BrushIcon />}
          mode="dark"
        />
        <ServiceCard
          title={"Consultation Services"}
          list={["Comprehensive advice on selecting materials and designs"]}
          icon={<LightBulb />}
          mode="light"
        />
      </div>
    </div>
  );
};

export default ServicesBlock;
