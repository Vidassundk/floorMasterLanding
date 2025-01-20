import React from "react";

const MailIcon: React.FC<{ size?: number; fill?: string }> = ({
  size = 28,
  fill = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.58716 7.06738C3.58716 6.44607 4.09084 5.94238 4.71216 5.94238H22.7012C23.3225 5.94238 23.8262 6.44607 23.8262 7.06738V19.8071C23.8262 21.0498 22.8188 22.0571 21.5762 22.0571H5.82617C4.58353 22.0571 3.57617 21.0498 3.57617 19.8071V7.43213C3.57617 7.37856 3.57992 7.32586 3.58716 7.27428V7.06738ZM5.82617 9.56911V19.8071H21.5762V9.56949L16.0879 15.0578C14.7698 16.3759 12.6329 16.3759 11.3149 15.0578L5.82617 9.56911ZM7.59503 8.15599H19.8077L14.4969 13.4668C14.0576 13.9062 13.3452 13.9062 12.9059 13.4668L7.59503 8.15599Z"
        fill={fill}
      />
    </svg>
  );
};

export default MailIcon;
