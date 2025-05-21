import clientPromise from "@/lib/mongoDb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await clientPromise;
  const db = client.db();

  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(params.id) });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

// import {
//   getProductById,
//   updateProduct,
//   deleteProduct,
// } from "@/lib/db/products";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   _: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const product = await getProductById(params.id);
//   return NextResponse.json(product);
// }

// export async function PUT(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const data = await req.json();
//   const result = await updateProduct(params.id, data);
//   return NextResponse.json({ updated: result.modifiedCount });
// }

// export async function DELETE(
//   _: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const result = await deleteProduct(params.id);
//   return NextResponse.json({ deleted: result.deletedCount });
// }
