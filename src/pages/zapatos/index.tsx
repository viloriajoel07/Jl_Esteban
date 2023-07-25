import { useState } from "react";
import { Card, Header } from "~components";
import { Layout } from "~components/Layout";
import { shoes } from "~data/Data";
const Zapatos = () => {
  const [listShoes, setListShoes] = useState(shoes);

  return (
    <Layout headerGradient>
      <h2 className="text-2xl mb-4 lg:text-4xl font-bold w-full text-">
        Zapatos
      </h2>
      <section className="grid-responsive w-full">
        {shoes.map((item: any) => (
          <a key={item.id} href={`product/${item.id}_shoes`}>
            <Card item={item} key={item.id} />
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Zapatos;
