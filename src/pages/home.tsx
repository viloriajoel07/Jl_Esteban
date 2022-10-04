import { Header, Card } from "~components";
import Data from "../data/Data";

const Home = () => {
  const { items } = Data;

  return (
    <div className="flex flex-col">
      <Header />
      <h2 className="px-10 text-6xl pb-6 font-bold">All products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-4 items-center w-full px-10">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
