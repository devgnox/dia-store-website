"use client";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import Currency from "@/components/UI/Currency";
import Button from "./UI/Button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";

interface IInfoProps {
  data: Product;
}

const Info: React.FC<IInfoProps> = ({ data }) => {
  const router = useRouter();
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-gray-950">Size:</h3>
          <div className="">
            {data?.size?.value} - {data?.size?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-gray-950">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add to Cart <ShoppingCart />
        </Button>
      </div>
    </>
  );
};

export default Info;
