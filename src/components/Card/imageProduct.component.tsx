import Image from "next/image";
import React, { FC } from "react";

interface sectionProps {
  item?: any;
}

const ImageProduct: FC<sectionProps> = ({ item }) => {
  return (
    <div className="relative bg-gray-100 flex-1 w-full">
      <Image
        src={item.image}
        className="w-full h-full object-cover hover:scale-110 transition-all duration-300 !p-10"
      />
    </div>
  );
};

export default ImageProduct;
