import Header from "@/app/_components/header";
import Search from "@/app/_components/search";
import CategoryList from "@/app/_components/category/category-list";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <CategoryList />
    </>
  );
};

export default Home;
