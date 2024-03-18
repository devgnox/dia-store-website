import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IIconButtonProps {
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}

const IconButton: React.FC<IIconButtonProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <button
      className={cn(
        `rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
