import { Product, ProductCart } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ICartStore {
  items: ProductCart[];
  addItem: (data: Product) => void;
  removeItem: (id: string, variant:string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const curentItems = get().items;
        const variant=`${data.id}-${data.color}-${data.size}`
        const existingItem = curentItems.find((item) => item.id === data.id && item.variant===variant);
        if (existingItem) {
          existingItem.quantity += 1;
          set({
            items: [
              ...curentItems.filter((item) => item.id !== data.id),
              existingItem,
            ],
          });
        } else {
          const variant=`${data.id}-${data.color}-${data.size}`
          set({ items: [...get().items, { ...data, quantity: 1, variant }] });
        }

        toast.success("Item added to cart.");
      },
      removeItem: (id: string, variant:string) => {
        const curentItems = get().items;
        const existingItem = curentItems.find((item) => item.id === id && item.variant===variant);

        set({ items: [...get().items.filter((item) => item.variant !== existingItem?.variant)] });
        toast.success("Item removed to cart.");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
