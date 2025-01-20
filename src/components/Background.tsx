import React from "react";

const Background = ({ withBgTop = true, withBgBottom = false }) => {
  return (
    <div className="absolute inset-0 z-[-1]">
      {/* Gradient Overlay */}
      {withBgTop && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background), transparent 30%)",
          }}
        ></div>
      )}
      {withBgBottom && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--brown), transparent 120%)",
          }}
        ></div>
      )}

      {/* Vertical Lines */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-0 absolute inset-0 -z-10 h-full">
        <div></div>
        <div className={`bg-foreground opacity-5 w-0.5`}></div>
        <div className={`bg-foreground opacity-5 w-0.5`}></div>
        <div className={`bg-foreground opacity-5 w-0.5`}></div>
        <div className={`bg-foreground opacity-5 w-0.5`}></div>
        <div className={`bg-foreground opacity-5 w-0.5`}></div>
      </div>
    </div>
  );
};

export default Background;
