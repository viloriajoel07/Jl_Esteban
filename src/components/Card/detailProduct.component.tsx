import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { Button } from "~components/Button";

interface sectionProps {
  item?: any;
}

const DetailProduct: FC<sectionProps> = ({ item }) => {
  return (
    <div className="pb-3 gap-3">
      <div className="flex py-1 items-center justify-between text-2xl">
        <span>$ {item.price}.000</span>
        <span className="text-sm m-0 py-1 bg-green-500 text-white rounded-md px-2 flex items-center gap-2">
          <Icon
            icon="streamline:money-cashier-tag-codes-tags-tag-product-label"
            className="text-white"
          />
          New product
        </span>
      </div>
      <h5 className="text-xl uppercase whitespace-nowrap text-ellipsis overflow-hidden">
        {item.title}
      </h5>
      <p className="text-sm">The bests styles for summer</p>
      <div className="flex py-1 items-center justify-between">
        <div className="flex text-xl items-center">
          <Icon icon="ant-design:star-filled" className="text-blue-500"></Icon>
          <Icon icon="ant-design:star-filled" className="text-blue-500"></Icon>
          <Icon icon="ant-design:star-filled" className="text-blue-500"></Icon>
          <Icon icon="ant-design:star-filled" className="text-blue-500"></Icon>
          <Icon
            icon="ant-design:star-outlined"
            className="text-blue-500"
          ></Icon>
        </div>
        <div className="flex gap-2">
          <Button
            mode="floatButton"
            className="hover:bg-blue-500 hover:border-white hover:text-white hover:font-bold text-gray-400"
          >
            <Icon icon="ei:heart" className="text-3xl pt-[2px]"></Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
