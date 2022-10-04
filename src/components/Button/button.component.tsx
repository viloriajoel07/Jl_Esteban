import React, { ButtonHTMLAttributes, FC } from "react";
import { Icon } from "@iconify/react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "fill" | "outline" | "default" | "floatButton";
  classButton?: string;
  text?: string;
  event?: any;
  icon?: string;
  classIcon?: string;
}

const Button: FC<ButtonProps> = ({
  mode = "default",
  text,
  classButton,
  event,
  type,
  icon,
  classIcon,
  onClick,
  ...props
}) => {
  const styleOption = {
    default: "",
    fill: "bg-sky-500 !text-white px-4 py-3 text-gray-400",
    outline: "bg-gray-100",
    floatButton:
      "!w-8 !h-8 border border-black flex items-center justify-center !rounded-full absolute top-4 right-4 z-20 hover:bg-black hover:text-white transition-all",
  }[mode];

  return (
    <button
      className={`${styleOption} ${classButton} rounded-2xl flex-1 font-bold`}
      type={type}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className={classIcon} />}
      {text}
    </button>
  );
};

export default Button;
