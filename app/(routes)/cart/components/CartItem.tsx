"use client";
import { Product, ProductCart } from "@/types";
import React from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Currency from "@/components/UI/Currency";
import useCart from "@/hooks/useCart";
import IconButton from "@/components/UI/IconButton";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface ICartItemProp {
  data: ProductCart;
}

const CartItem: React.FC<ICartItemProp> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();

  const onRemove = () => {
    cart.removeItem(data.id, data.variant);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} className="" />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p
              className="text-lg font-semibold text-black cursor cursor-pointer"
              onClick={() => router.push(`/product/${data.id}`)}
            >
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data?.color?.name}</p>
            <p className="text-gray-500 ml-4 border-1 border-gray-200 pl-4">
              {data?.size?.name}
            </p>
            <p className="text-gray-500 ml-4 border-1 border-gray-200 pl-4">
              Quantity: {data?.quantity}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
