import React from "react";

interface ParquetArrowProps {
  scale: number;
  fill?: string;
}

const ParquetArrow: React.FC<ParquetArrowProps> = ({
  scale,
  fill = "currentColor",
}) => {
  const width = 1780 * scale;
  const height = 852 * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1780 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.525e-06 53.2499L53.25 -6.04002e-05L426 372.75L535.322 263.428L325.144 53.2499L378.394 -5.65228e-05L751.144 372.75L860.467 263.428L650.289 53.2499L703.539 -5.26455e-05L1076.29 372.75L1129.54 426L1076.29 479.25L703.539 852L650.289 798.75L1023.04 426L913.717 316.678L804.394 426L751.144 479.25L378.394 852L325.144 798.75L697.894 426L588.572 316.678L479.25 426L426 479.25L53.25 852L6.16702e-05 798.75L372.75 426L9.525e-06 53.2499Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M650 53.2499L703.25 -6.04002e-05L1076 372.75L1185.32 263.428L975.144 53.2499L1028.39 -5.65228e-05L1401.14 372.75L1510.47 263.428L1300.29 53.2499L1353.54 -5.26455e-05L1726.29 372.75L1779.54 426L1726.29 479.25L1353.54 852L1300.29 798.75L1673.04 426L1563.72 316.678L1454.39 426L1401.14 479.25L1028.39 852L975.144 798.75L1347.89 426L1238.57 316.678L1129.25 426L1076 479.25L703.25 852L650 798.75L1022.75 426L650 53.2499Z"
        fill={fill}
      />
    </svg>
  );
};

export default ParquetArrow;
