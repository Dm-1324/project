export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  creator: {
    name: string;
    handle: string;
    image: string;
  };
  rating: number;
  reviewCount: number;
  trending: boolean;
  discount: number | null;
  description?: string;
  specifications?: {
    [key: string]: string;
  };
}
