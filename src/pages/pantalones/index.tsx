import { useState } from "react";
import { Card, Header } from "~components";
import { Layout } from "~components/Layout";
import { pants } from "~data/Data";
const Pantalones = () => {
  const [listShoes, setListShoes] = useState(pants);

  return (
    <Layout headerGradient>
      <h2 className="text-2xl mb-4 lg:text-4xl font-bold w-full text-">
        Pantalones
      </h2>
      <section className="grid-responsive w-full">
        {pants.map((item: any) => (
          <a key={item.id} href={`product/${item.id}_pants`}>
            <Card item={item} key={item.id} />
          </a>
        ))}
      </section>
    </Layout>
  );
};

export default Pantalones;
