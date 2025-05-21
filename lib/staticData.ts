import { Product } from "./types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Minimalist Daily Planner",
    price: 24.99,
    images: [
      "https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    category: "Lifestyle",
    creator: {
      name: "Emma Lewis",
      handle: "emmacreates",
      image:
        "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    rating: 4.8,
    reviewCount: 124,
    trending: true,
    discount: null,
    tags: ["Self Made", "Promotional"],
  },
  {
    id: "p2",
    name: "Wireless Noise-Cancelling Headphones",
    price: 149.99,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    category: "Tech",
    creator: {
      name: "Alex Rivera",
      handle: "techwithalex",
      image:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    rating: 4.9,
    reviewCount: 302,
    trending: true,
    discount: 15,
    tags: ["Resale"],
  },
  {
    id: "p3",
    name: "Sustainable Cotton Tote Bag",
    price: 19.99,
    images: [
      "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5632380/pexels-photo-5632380.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    category: "Fashion",
    creator: {
      name: "Sophia Chen",
      handle: "sophiadesigns",
      image:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    rating: 4.7,
    reviewCount: 89,
    trending: true,
    discount: null,
    tags: ["Self Made", "Promotional"],
  },
];