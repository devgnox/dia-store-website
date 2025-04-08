export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
  textColor: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  category: Category;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface ProductCart extends Product {
  quantity: number;
  variant:string
}
