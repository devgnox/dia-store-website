import React from "react";
import Container from "@/components/UI/Container";
import Billboard from "@/components/Billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import { Product } from "@/types";
import getMainBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getMainBillboard();

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
