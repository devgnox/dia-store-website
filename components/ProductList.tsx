import { Product } from "@/types";
import React from "react";
import NoResults from "@/components/UI/NoResults";
import ProductCard from "./UI/ProductCard";

interface IProductListProps {
  items: Product[];
  title: string;
}
const ProductList: React.FC<IProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
