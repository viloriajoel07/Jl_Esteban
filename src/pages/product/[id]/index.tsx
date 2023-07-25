import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "~components/Layout";
import ViewDetailProduct from "~components/ViewDetail/viewDetailProduct";
import { shoes, shirts, mostSold, bags, accessories, pants } from "~data/Data";

const Detail = () => {
  const [dataItem, setDataItem] = useState<any>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const idEle = `${id}`;
      const [paramId, arrayFind] = idEle.split("_");
      let itemFind;
      console.log(paramId, arrayFind);

      if (arrayFind === "shoes")
        itemFind = shoes.find((item) => item.id === parseInt(paramId));
      if (arrayFind === "shirts")
        itemFind = shirts.find((item) => item.id === parseInt(paramId));
      if (arrayFind === "pants")
        itemFind = pants.find((item) => item.id === parseInt(paramId));
      if (arrayFind === "accessories")
        itemFind = accessories.find((item) => item.id === parseInt(paramId));
      if (arrayFind === "bags")
        itemFind = bags.find((item) => item.id === parseInt(paramId));
      if (arrayFind === "mostSold")
        itemFind = mostSold.find((item) => item.id === parseInt(paramId));

      setDataItem(itemFind);
    }
  }, [id]);

  return (
    <Layout headerGradient>
      {dataItem && <ViewDetailProduct item={dataItem} />}
    </Layout>
  );
};

export default Detail;
