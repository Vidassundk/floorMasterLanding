interface ChevronIconProps {
  fill?: string;
  size?: number;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  fill = "currentColor",
  size,
}) => {
  return (
    <svg
      style={{ marginBottom: 1 }}
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
