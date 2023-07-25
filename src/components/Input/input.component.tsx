import React, { FC, InputHTMLAttributes, useState } from "react";
import { Icon } from "@iconify/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: "Light" | "Dark";
  mode?: "outline" | "Fill";
  label?: string;
  classContain?: string;
  classInput?: string;
  event?: any;
  icon?: string;
}

const Input: FC<InputProps> = ({
  label,
  theme,
  mode,
  icon,
  classContain,
  classInput,
  id,
  name,
  placeholder,
  onClick,
  onChange,
  event,
  type = "text",
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`bg-black/25 rounded-xl flex-1 relative items-center ${classContain} `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div
        className={`border border-gray-600 px-4 py-2 rounded-lg ${
          focus && "!border-sky-500 shadow-md shadow-sky-600/30 transition-all"
        }`}
      >
        <label
          htmlFor={id}
          className={`font-bold text-gray-300 ${focus && "!text-white"}`}
        >
          {label}
        </label>
        <div className="flex">
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className={`${classInput} bg-transparent text-sm text-white w-full outline-none`}
            onClick={() => {}}
            onChange={() => {}}
          />
          {icon && (
            <button
              className={`absolute right-4 top-0 flex items-center text-gray-600 h-full ${
                event ? "cursor-pointer" : "cursor-default"
              }`}
              type="button"
              onClick={event && event}
            >
              <Icon
                icon={icon}
                className={`w-6 h-6 ${focus && "text-sky-600"}`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
