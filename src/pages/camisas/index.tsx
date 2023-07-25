import { useState } from "react";
import { Card, Header } from "~components";
import { Layout } from "~components/Layout";
import { shirts } from "~data/Data";
const Camisas = () => {
  const [listShoes, setListShoes] = useState(shirts);

  return (
    <Layout headerGradient>
      <h2 className="text-2xl mb-4 lg:text-4xl font-bold w-full text-">
        Camisas & Hoodies
      </h2>
      <section className="grid-responsive w-full">
        {shirts.map((item: any) => (
          <a key={item.id} href={`product/${item.id}_shirts`}>
            <Card item={item} key={item.id} />
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Camisas;
