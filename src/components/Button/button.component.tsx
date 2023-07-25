import React, {
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from "react";
import { Icon } from "@iconify/react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "fill" | "outline" | "default" | "floatButton";
  text?: string;
  event?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  mode = "default",
  text,
  event,
  type,
  className,
  children,
  ...props
}) => {
  const styleOption = {
    default: "",
    fill: "bg-gradient-to-r from-blue-700 to-sky-500 !text-white px-4 py-3 text-gray-400",
    outline: "bg-gray-100",
    floatButton:
      "!w-9 !h-9 border-[2px] border-gray-300 flex items-center justify-center text-center !rounded-full z-20 transition-all",
  }[mode];

  return (
    <button
      className={`${styleOption} ${className} rounded-lg flex-1 font-bold`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
