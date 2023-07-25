import React, { FC } from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Modal,
  ViewDetail,
  Colors,
  Sizes,
  Details,
  ImageProduct,
} from "~components";
import { useModal } from "~hooks/useModal";
import { useOutsideClick } from "~hooks/useOutsideClick";

interface CardProps {
  item?: any;
  ref?: any;
}

const CardGlobal: FC<CardProps> = ({ item, ref }) => {
  return (
    <div className="relative border border-gray-300 min-h-[24rem] shadow-xl w-full flex flex-col items-center justify-center gap-4 rounded-[20px] overflow-hidden bg-white cursor-pointer">
      <div className="flex justify-center bg-white w-full flex-grow border-b-2">
        <ImageProduct item={item} />
      </div>

      <div className="w-full px-4 flex flex-col">
        <Details item={item} />
      </div>
    </div>
  );
};

export default CardGlobal;
