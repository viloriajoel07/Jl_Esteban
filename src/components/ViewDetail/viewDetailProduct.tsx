import { Icon } from "@iconify/react";
import React, { FC } from "react";
import { Button } from "~components/Button";
import { ImageProduct } from "~components/Card";
import { Input } from "~components/Input";

interface DetailsProps {
  item: any;
  closeModal: any;
}

const ViewDetailProduct: FC<DetailsProps> = ({ item, closeModal }) => {
  return (
    <div className=" w-80% lg:w-[48rem] bg-white flex flex-col lg:flex-row rounded-2xl">
      <Button
        icon="emojione-monotone:cross-mark"
        mode="floatButton"
        onClick={closeModal}
        classButton="z-30"
      />
      <div className="flex-1 w-full flex items-center justify-center bg-gray-100 rounded-2xl px-8 hover:scale-150 transition-all z-20">
        <ImageProduct item={item} />
      </div>

      <div className="flex flex-col p-8 sm:p-12 flex-1">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <div className="flex py-1">
          <Icon icon="ant-design:star-filled" />
          <Icon icon="ant-design:star-filled" />
          <Icon icon="ant-design:star-filled" />
          <Icon icon="ant-design:star-filled" />
          <Icon icon="ant-design:star-outlined" />
        </div>
        <hr />
        <p className="py-2">${item.price}.000</p>
        <h2>Colors</h2>
        <div className="flex gap-1">
          <div className="w-6 h-6 rounded-full text-sm flex items-center justify-center bg-blue-700"></div>
          <div className="w-6 h-6 rounded-full text-center text-sm flex items-center justify-center bg-black"></div>
          <div className="w-6 h-6 rounded-full text-center text-sm flex items-center justify-center bg-red-600"></div>
        </div>
        <form action="" className="py-4">
          <Input
            mode="outline"
            placeholder="1"
            label="ammount"
            classContain="!py-1"
            type="number"
          />
          <Button
            type="submit"
            text="Add to cart"
            mode="fill"
            classButton="w-full mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default ViewDetailProduct;
