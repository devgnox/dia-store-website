import React from "react";
import Image from "next/image";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface IGalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<IGalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt={image.url}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              `absolute inset-0 rounded-md ring-1 ring-offset-1`,
              selected ? "ring-slate-600" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
