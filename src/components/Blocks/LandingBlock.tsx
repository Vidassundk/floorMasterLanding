import React from "react";
import LocationButton from "../LocationButton";
import Button from "../Button";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import Image from "next/image";

const LandingBlock = () => {
  return (
    <section
      className="relative"
      style={{
        paddingTop: "115px",
      }}
    >
      <div className="flex flex-col justify-between h-full gap-y-16 mx-auto lg:pb-16 lg:pt-8 lg:px-12">
        {/* Hero Section: Location Button + Title + Buttons */}
        <div className="flex flex-col items-center justify-center text-center gap-y-2 md:gap-y-8">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4"
            role="alert"
          >
            <LocationButton title={"Rogalando"} />
          </a>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-7xl xl:text-8xl text-foreground max-w-6xl mx-auto">
            We deliver expert flooring solutions with speed and precision.
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
            <Button
              href="#"
              text="Start Your Flooring Project"
              icon={<PhoneIcon fill="#f8fafc" />}
              className="text-base bg-gulvGreen hover:opacity-90 focus:ring-gray-300 text-slate-50"
              accessabilityLabel="Call Us Button"
            />
            <Button
              href="#"
              text="Ask Us Anything"
              icon={<MailIcon size={28} fill="#f8fafc" />}
              className="text-base bg-foreground hover:opacity-90 focus:ring-gray-300 text-slate-50"
              accessabilityLabel="Ask Us Anything Button"
            />
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-10 container xl:container-none w-full mx-auto">
          {/* Image 1 */}
          <div
            className="relative w-full overflow-hidden group rounded-lg"
            style={{ paddingBottom: "65%" }}
          >
            <Image
              src="/images/parquet1.png"
              alt="Parquet 1"
              fill={true}
              className="absolute inset-0  object-cover transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1"
            />
          </div>

          {/* Image 2 */}
          <div
            className="relative hidden lg:block w-full overflow-hidden group rounded-lg"
            style={{ paddingBottom: "65%" }}
          >
            <Image
              src="/images/parquet2.png"
              alt="Parquet 2"
              fill={true}
              className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
            />
          </div>

          {/* Image 3 */}
          <div
            className="relative hidden lg:block w-full overflow-hidden group rounded-lg"
            style={{ paddingBottom: "65%" }}
          >
            <Image
              src="/images/parquet3.png"
              alt="Parquet 3"
              fill={true}
              className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
