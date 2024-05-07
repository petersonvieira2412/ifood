import { Product } from "@prisma/client";

const ServicePrice = {
  formatPrice(price: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    }).format(price);
  },

  calculateProductTotalPrice(product: Product): string {
    if (product.discountPercentage === 0)
      return this.formatPrice(Number(product.price));
    const discount = Number(product.price) * (product.discountPercentage / 100);

    return this.formatPrice(Number(product.price) - discount);
  },
};

export { ServicePrice };
