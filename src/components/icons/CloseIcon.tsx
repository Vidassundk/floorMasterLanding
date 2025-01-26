interface CloseIconProps {
  fill?: string;
  size?: number;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 20,
  fill = "currentColor",
}) => {
  return (
    <svg
      fill={fill}
      version="1.1"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <polygon
            points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
               512,452.922 315.076,256 		"
          />
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;
