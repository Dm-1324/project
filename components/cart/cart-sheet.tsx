"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store";
// import { products } from "@/lib/data";
// import CartItem from "./cart-item";
// import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartSheet() {
  const { items, total } = useCartStore();
  // const [isOpen, setIsOpen] = useState(false);

  // const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // const cartProducts = items.map((item) => {
  //   const product = { id: "p3",
  //   name: "Sustainable Cotton Tote Bag",
  //   price: 19.99,
  //   images: [
  //     "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     "https://images.pexels.com/photos/5632380/pexels-photo-5632380.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   ],
  //   category: "Fashion",
  //   creator: {
  //     name: "Sophia Chen",
  //     handle: "sophiadesigns",
  //     image:
  //       "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  //   rating: 4.7,
  //   reviewCount: 89,
  //   trending: true,
  //   discount: null,
  //   tags: ["Self Made", "Promotional"],};
  //   return {
  //     ...product!,
  //     quantity: item.quantity,
  //   };
  // });

  // const handleOpenChange = (open: boolean) => {
  //   setIsOpen(open);
  // };

  return (<div>hello</div>
    // <Sheet open={isOpen} onOpenChange={handleOpenChange}>
    //   {/* <SheetTrigger asChild>
    //     <Button variant="outline" size="icon" className="relative">
    //       <ShoppingCart className="h-5 w-5" />
    //       {cartItemsCount > 0 && (
    //         <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
    //           {cartItemsCount}
    //         </span>
    //       )}
    //     </Button>
    //   </SheetTrigger> */}
    //   {/* <SheetContent className="w-full sm:max-w-lg">
    //     <SheetHeader>
    //       <SheetTitle>Shopping Cart ({cartItemsCount} items)</SheetTitle>
    //     </SheetHeader>

    //     <div className="mt-8 space-y-4 pb-32">
    //       {cartProducts.map((product) => (
    //         <CartItem
    //           key={product.id}
    //           product={product}
    //           quantity={product.quantity}
    //         />
    //       ))}
    //     </div>

    //     {cartItemsCount > 0 ? (
    //       <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
    //         <div className="flex items-center justify-between mb-4">
    //           <span className="text-lg font-semibold">Total</span>
    //           <span className="text-lg font-bold">${total.toFixed(2)}</span>
    //         </div>
    //         <SheetClose asChild>
    //           <Button className="w-full" size="lg" asChild>
    //             <Link href="/checkout">Proceed to Checkout</Link>
    //           </Button>
    //         </SheetClose>
    //       </div>
    //     ) : (
    //       <div className="h-full flex flex-col items-center justify-center">
    //         <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
    //         <p className="text-lg font-medium mb-2">Your cart is empty</p>
    //         <p className="text-muted-foreground mb-4">
    //           Add items to get started
    //         </p>
    //         <SheetClose asChild>
    //           <Button asChild>
    //             <Link href="/products">Browse Products</Link>
    //           </Button>
    //         </SheetClose>
    //       </div>
    //     )}
    //   </SheetContent> */}
    // </Sheet>
  );
}
