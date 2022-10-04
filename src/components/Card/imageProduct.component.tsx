import Image from "next/image";
import React, { FC } from "react";

interface sectionProps {
  item?: any;
}

const ImageProduct: FC<sectionProps> = ({ item }) => {
  return (
    <div className="relative bg-gray-100 flex-1 w-full rounded-t-[20px]">
    <p className="font-bold px-4 py-2">Shope app</p>
    <Image src={item.image} />
  </div>
  );
};

export default ImageProduct;
