import Header from "@/app/_components/header";
import Search from "@/app/_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </>
  );
};

export default Home;
