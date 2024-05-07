import { Prisma } from "@prisma/client";
import Image from "next/image";
import { ServicePrice } from "@/app/_helpers/price";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div>
        <h2>{product.name}</h2>
        <div className="flex gap-4">
          <h3>{ServicePrice.calculateProductTotalPrice(product)}</h3>
          {product.discountPercentage > 0 && (
            <span className="text-muted-foreground line-through">
              {ServicePrice.formatPrice(Number(product.price))}
            </span>
          )}
        </div>

        <span className="block text-sm text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
