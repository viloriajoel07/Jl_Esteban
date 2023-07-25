import { Icon } from "@iconify/react";
import Atropos from "atropos/react";
import Image from "next/image";
import React, { FC } from "react";
import { Button } from "~components/Button";
interface DetailsProps {
  item: any;
}

const ShowTitle = (props: any) => {
  return (
    <>
      <h1 className="text-2xl">{props.title}</h1>
      <div className="py-2">
        <span className="text-sm bg-orange-500 text-white px-2 py-1 rounded-md">
          Más vendidos
        </span>
      </div>
      <div className="flex py-1">
        <Icon
          width={18}
          icon="ant-design:star-filled"
          className="text-sky-500"
        />
        <Icon
          width={18}
          icon="ant-design:star-filled"
          className="text-sky-500"
        />
        <Icon
          width={18}
          icon="ant-design:star-filled"
          className="text-sky-500"
        />
        <Icon
          width={18}
          icon="ant-design:star-filled"
          className="text-sky-500"
        />
        <Icon
          width={18}
          icon="ant-design:star-outlined"
          className="text-sky-500"
        />
      </div>
      <hr />
    </>
  );
};

const ViewDetailProduct: FC<DetailsProps> = ({ item }) => {
  return (
    <div className="w-full bg-white flex gap-12 flex-col md:flex-row rounded-2xl items-center justify-center pt-2">
      <div className="block md:hidden w-full">
        <ShowTitle title={item.title} />
      </div>
      {/* <Atropos shadow={false}> */}
      <div className=" bg-gray-100 rounded-xl flex flex-1 justify-center items-center">
        <Image src={item.image} className="object-contain" />
      </div>
      {/* </Atropos> */}
      <div className="flex flex-grow justify-center w-full md:w-auto">
        <div className="flex flex-col w-full flex-grow md:max-w-[32rem] justify-center">
          <div className="hidden md:block">
            <ShowTitle title={item.title} />
          </div>

          <p className="py-2 text-3xl">${item.price}.000</p>
          <span>Colores:</span>
          <div className="flex gap-1">
            <div className="w-8 h-8 rounded-full border border-blue-600 p-[3px] cursor-pointer">
              <div className="w-full h-full rounded-full text-sm flex items-center justify-center bg-blue-600"></div>
            </div>
            <div className="w-8 h-8 rounded-full border border-red-500 p-[3px] cursor-pointer">
              <div className="w-full h-full rounded-full text-sm flex items-center justify-center bg-red-500"></div>
            </div>
            <div className="w-8 h-8 rounded-full border border-green-600 p-[3px] cursor-pointer">
              <div className="w-full h-full rounded-full text-sm flex items-center justify-center bg-green-600"></div>
            </div>
          </div>
          <div className="py-2">
            <span>Talla Disponibles:</span>
            <div className="flex gap-2 [&>span]:font-semibold [&>span]:text-sm">
              <span>35</span>
              <span>36</span>
              <span>37</span>
              <span>38</span>
              <span>39</span>
              <span>40</span>
            </div>
          </div>
          <div className="py-2">
            <span>Pares Disponibles:</span>
            <div className="flex gap-2 [&>span]:font-semibold [&>span]:text-sm">
              <span>6</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button mode="fill" className="font-normal">
              Hacer pedido
            </Button>
            <Button
              mode="default"
              className="border-2 border-blue-600 py-2 text-blue-600 hover:bg-blue-300/20 font-normal"
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailProduct;
