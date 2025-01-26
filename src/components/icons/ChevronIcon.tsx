interface ChevronIconProps {
  fill?: string;
  size?: number;
  direction?: "up" | "down" | "left" | "right"; // Add direction prop
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  fill = "currentColor",
  size = 10,
  direction = "down", // Default direction to 'down'
}) => {
  const getRotation = (direction: "up" | "down" | "left" | "right") => {
    switch (direction) {
      case "up":
        return 180;
      case "left":
        return 90;
      case "right":
        return -90;
      default:
        return 0;
    }
  };

  const rotation = getRotation(direction);

  return (
    <svg
      style={{ marginBottom: 1, transform: `rotate(${rotation}deg)` }} // Apply rotation based on direction
      width={size}
      height={size && size / 1.4286}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.22992 0.671875L0.287109 1.61469L5.00114 6.32873L9.7152 1.61471L8.7724 0.671895L5.00114 4.44313L1.22992 0.671875Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronIcon;
