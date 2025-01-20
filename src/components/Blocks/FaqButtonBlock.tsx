import React from "react";
import ParquetArrow from "../icons/ParquetArrow";

const FaqButtonBlock = () => {
  return (
    <div className="relative">
      <div className="absolute bg-brown inset-0 -z-10 top-[50%]"></div>
      <button className="bg-sand  hover:bg-brown hover:text-background transition-all container duration-200 text-foreground font-bold py-8 text-center mx-auto rounded-lg overflow-hidden flex flex-row items-center h-[200px] px-36 hover:px-48 justify-center lg:justify-between">
        <h2 className="text-5xl">F.A.Q.</h2>
        <div className="hidden lg:flex">
          <ParquetArrow scale={0.4} />
        </div>
      </button>
    </div>
  );
};

export default FaqButtonBlock;
