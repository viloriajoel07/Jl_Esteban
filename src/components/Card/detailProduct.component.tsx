import React, { FC } from "react";
import { Icon } from "@iconify/react";

interface sectionProps {
  item?: any;
}

const DetailProduct: FC<sectionProps> = ({ item }) => {
  return (
    <div className="pb-3 gap-3">
      <div className="flex gap-3 items-center justify-between">
        <h5 className="text-xl uppercase whitespace-nowrap text-ellipsis overflow-hidden">
          {item.title}
        </h5>
        <span className="text-sm px-2 py-1 bg-green-500 text-white rounded-lg font-bold h-7">
          New
        </span>
      </div>
      <p className="text-sm">The bests styles for summer</p>
      <div className="flex py-1">
        <Icon icon="ant-design:star-filled"></Icon>
        <Icon icon="ant-design:star-filled"></Icon>
        <Icon icon="ant-design:star-filled"></Icon>
        <Icon icon="ant-design:star-filled"></Icon>
        <Icon icon="ant-design:star-outlined"></Icon>
      </div>
    </div>
  );
};

export default DetailProduct;
