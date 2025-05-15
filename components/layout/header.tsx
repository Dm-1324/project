"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Fashion", href: "/categories/fashion" },
  { name: "Tech", href: "/categories/tech" },
  { name: "Fitness", href: "/categories/fitness" },
  { name: "Beauty", href: "/categories/beauty" },
  { name: "Photography", href: "/categories/photography" },
  { name: "Business", href: "/categories/business" },
  { name: "Music", href: "/categories/music" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200 ease-in-out",
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" : "bg-transparent"
    )}>
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center font-bold text-2xl">
              CreatorMarket
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-base">
                    Categories
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link href={category.href}>{category.name}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/categories">View All Categories</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/creators">Creators</Link>
              </Button>
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/trending">Trending</Link>
              </Button>
              <Button variant="ghost" className="text-base" asChild>
                <Link href="/deals">Deals</Link>
              </Button>
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signup">Sign Up</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ModeToggle />
          </div>
          
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="grid gap-4">
              <Button variant="outline" asChild className="justify-start h-12 text-base">
                <Link href="/categories">Categories</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start h-12 text-base">
                <Link href="/creators">Creators</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start h-12 text-base">
                <Link href="/trending">Trending</Link>
              </Button>
              <Button variant="outline" asChild className="justify-start h-12 text-base">
                <Link href="/deals">Deals</Link>
              </Button>
            </nav>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="h-12" asChild>
                <Link href="/account/dashboard">My Account</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12" asChild>
                <Link href="/account/orders">Orders</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="default" size="lg" className="h-12" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="secondary" size="lg" className="h-12" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}