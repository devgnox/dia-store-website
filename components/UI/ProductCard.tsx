"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "@/components/UI/IconButton";
import Currency from "@/components/UI/Currency";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface IProductCardProps {
  data: Product;
}

const ProductCard: React.FC<IProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-white relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          fill
          className="aspect-square object-contain rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              className="text-gray-600"
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className="text-gray-600"
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className=" text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
