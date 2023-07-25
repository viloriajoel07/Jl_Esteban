import { useState } from "react";
import { Card, Header } from "~components";
import { Layout } from "~components/Layout";
import { accessories } from "~data/Data";
const Accesorios = () => {
  const [listShoes, setListShoes] = useState(accessories);

  return (
    <Layout headerGradient>
      <h2 className="text-2xl mb-4 lg:text-4xl font-bold w-full text-">
        Accesorios
      </h2>
      <section className="grid-responsive w-full">
        {accessories.map((item: any) => (
          <a key={item.id} href={`product/${item.id}_accessories`}>
            <Card item={item} key={item.id} />
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Accesorios;
