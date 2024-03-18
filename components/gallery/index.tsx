"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

interface IGalleryProps {
  images: ImageType[];
}
const Gallery: React.FC<IGalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List
          className="grid grid-cols-4 gap-6
        "
        >
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full bg-gray-100">
        {images.map((img) => (
          <Tab.Panel key={img.id}>
            <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                src={img.url}
                alt={img.url}
                fill
                className="object-contain object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
