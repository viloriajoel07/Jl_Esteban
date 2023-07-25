import { useState } from "react";
import { Card, Header } from "~components";
import { Layout } from "~components/Layout";
import { bags } from "~data/Data";
const Bolsos = () => {
  const [listShoes, setListShoes] = useState(bags);

  return (
    <Layout headerGradient>
      <h2 className="text-2xl mb-4 lg:text-4xl font-bold w-full text-">
        Bolsos
      </h2>
      <section className="grid-responsive w-full">
        {bags.map((item: any) => (
          <a key={item.id} href={`product/${item.id}_bags`}>
            <Card item={item} key={item.id} />
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Bolsos;
