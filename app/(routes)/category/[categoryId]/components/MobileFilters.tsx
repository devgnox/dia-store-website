"use client";
import Button from "@/components/UI/Button";
import IconButton from "@/components/UI/IconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./Filter";

interface IMobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<IMobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex w-full h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
                className=""
              />
            </div>
            <div className="p-4 ">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
