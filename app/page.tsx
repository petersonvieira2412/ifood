import Header from "@/app/_components/header";
import Search from "@/app/_components/search";
import CategoryList from "@/app/_components/categories/category-list";
import ProductList from "@/app/_components/products/product-list";
import { Button } from "@/app/_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "@/app/_lib/prisma";
import PromoBanner from "@/app/_components/promo-banner";
import RestaurantList from "@/app/_components/restaurant/restaurant-list";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-0 pt-6">
        <PromoBanner
          src="/promo-banner-01.jpg"
          alt="Até 30% de desconto em pizzas"
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>

      <div className="px-0 pt-6">
        <PromoBanner
          src="/promo-banner-02.jpg"
          alt="A partir de R$ 17,90 em lanches"
        />
      </div>

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <RestaurantList />
      </div>
    </>
  );
};

export default Home;
