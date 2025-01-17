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
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  text,
  icon,
  className,
  iconClassName,
  accessabilityLabel,
}) => {
  return (
    <a
      href={href}
      className={`flex items-center rounded-full justify-center gap-2 py-2 px-3 text-nowrap font-inter text-sm font-semibold transition-opacity duration-200 focus:ring-4 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background ${className}`}
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
