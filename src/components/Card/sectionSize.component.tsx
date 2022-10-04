import React, { FC } from "react";

interface sectionProps {
  item?: any;
}

const SectionSize: FC<sectionProps> = ({ item }) => {
  return (
    <div className="pb-3">
      <h4 className="font-bold">Size</h4>
      <div className="flex gap-1">
        <div className="w-7 h-7 rounded-full text-sm flex items-center justify-center">
          <span>7</span>
        </div>
        <div className="w-7 h-7 rounded-full text-center text-sm flex items-center justify-center">
          <span>8</span>
        </div>
        <div className="w-7 h-7 rounded-full text-center text-sm flex items-center justify-center">
          <span>9</span>
        </div>
        <div className="w-7 h-7 rounded-full text-center text-sm flex items-center justify-center bg-red-600 text-white">
          <span>10</span>
        </div>
        <div className="w-7 h-7 rounded-full text-center text-sm flex items-center justify-center">
          <span>11</span>
        </div>
      </div>
    </div>
  );
};

export default SectionSize;
