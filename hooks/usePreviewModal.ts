import { Product } from "@/types";
import { create } from "zustand";

interface IPreviewModal {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<IPreviewModal>((set) => ({
  isOpen: false,
  data: undefined,
  onClose: () => set({ isOpen: false }),
  onOpen: (data: Product) => set({ data, isOpen: true }),
}));

export default usePreviewModal;
