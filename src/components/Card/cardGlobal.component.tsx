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
  const { isActive, onActiveModal, onDisabledModal } = useModal();
  const datePikerRef = useOutsideClick<HTMLDivElement>(onDisabledModal);

  return (
    <>
      <div
        key={item.id}
        className="relative shadow-2xl w-full flex flex-col items-center justify-center gap-4 rounded-[20px] bg-white cursor-pointer hover:scale-[102%] hover:z-30"
        onClick={onActiveModal}
      >
        <Button icon="ei:cart" classIcon="w-6 h-6" mode="floatButton" />
        <Button
          icon="ei:heart"
          classIcon="w-6 h-6"
          mode="floatButton"
          classButton="!top-14"
        />

        <ImageProduct item={item} />

        <div className="flex-1 w-full px-4 mb-8 ubuntu flex flex-col">
          <Details item={item} />
          <Sizes item={item} />
          <Colors item={item} />
        </div>
      </div>

      <Modal open={isActive} ref={datePikerRef}>
        <ViewDetail item={item} closeModal={onDisabledModal} />
      </Modal>
    </>
  );
};

export default CardGlobal;
