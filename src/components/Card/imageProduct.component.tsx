import Image from "next/image";
import React, { FC } from "react";

interface sectionProps {
  item?: any;
}

const ImageProduct: FC<sectionProps> = ({ item }) => {
  return (
    <Image
      src={item.image}
      className="w-full object-contain hover:scale-110 transition-all duration-300 !p-2"
      width="200%"
      height="200%"
    />
  );
};

export default ImageProduct;
