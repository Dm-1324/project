"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Users } from "lucide-react";
import ProductGrid from "@/components/products/product-grid";
import CreatorGrid from "@/components/creators/creator-grid";
import { products, featuredCreators } from "@/lib/data";

export default function TrendingPage() {
  const [activeTab, setActiveTab] = useState("products");
  
  const trendingProducts = products.filter(product => product.trending);
  const trendingCreators = featuredCreators.filter(creator => creator.followers > "500K");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
        <p className="text-lg text-muted-foreground">
          Discover what's hot on CreatorMarket - from trending products to rising creators.
        </p>
      </div>

      <Tabs defaultValue="products" className="space-y-8" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="products" className="flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trending Products
          </TabsTrigger>
          <TabsTrigger value="creators" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Rising Creators
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductGrid products={trendingProducts} />
        </TabsContent>

        <TabsContent value="creators">
          <CreatorGrid creators={trendingCreators} />
        </TabsContent>
      </Tabs>
    </div>
  );
}