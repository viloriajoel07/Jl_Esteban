import React, { FC } from "react";

interface sectionProps {
  item?: any;
}

const SectionColors: FC<sectionProps> = ({ item }) => {
  return (
    <div className="relative">
      <h4 className="font-bold">Color</h4>
      <div className="flex items-center">
        <div className="flex gap-1">
          <div className="w-6 h-6 rounded-full text-sm flex items-center justify-center bg-blue-700"></div>
          <div className="w-6 h-6 rounded-full text-center text-sm flex items-center justify-center bg-black"></div>
          <div className="w-6 h-6 rounded-full text-center text-sm flex items-center justify-center bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};
export default SectionColors;
