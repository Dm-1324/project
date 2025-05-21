import clientPromise from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("creator_store");
  const products = await db.collection("products").find({}).toArray();

  return NextResponse.json(products);
}

// import { getAllProducts, createProduct } from "@/lib/db/products";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   const products = await getAllProducts();
//   return NextResponse.json(products);
// }

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const result = await createProduct(data);
//   return NextResponse.json({ success: true, id: result.insertedId });
// }
