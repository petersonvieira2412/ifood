import Header from "@/app/_components/header";
import Search from "@/app/_components/search";
import CategoryList from "@/app/_components/category/category-list";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/banner-pizza.jpg"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
};

export default Home;
