import React from "react";

interface ButtonProps {
  href?: string;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  accessabilityLabel: string;
  onClick?: () => void;
  ghost?: boolean;
  noPadding?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  text,
  icon,
  className,
  iconClassName,
  accessabilityLabel,
  noPadding = false,
}) => {
  return (
    <a
      href={href}
      className={`flex items-center rounded-full justify-center gap-2 ${
        !noPadding ? "py-3 px-6" : ""
      } text-nowrap font-inter font-medium transition-all duration-200 focus:ring-4 text-lg ${className}`}
      onClick={onClick}
    >
      <span className="sr-only">{accessabilityLabel}</span>
      {icon && (
        <div
          className={`${iconClassName} h-5 w-5 flex items-center justify-center`}
        >
          {icon}
        </div>
      )}
      {text && text}
    </a>
  );
};

export default Button;
