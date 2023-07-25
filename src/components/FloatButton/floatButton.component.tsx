import { Icon } from "@iconify/react";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Button } from "~components/Button";

interface Props {
  showButton: boolean;
}

const FloatButton = ({ showButton }: Props) => {
  return (
    <Button
      mode="floatButton"
      className={`w-32 h-32 bottom-8 right-8 fixed bg-black/50 backdrop-blur-xl ${
        showButton ? "translate-x-0" : "translate-x-24"
      }`}
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
    >
      <Icon icon="uil:angle-up" className="text-white" width={24} />
    </Button>
  );
};

export default FloatButton;
