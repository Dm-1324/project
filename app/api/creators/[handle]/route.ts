import clientPromise from "@/lib/mongoDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { handle: string } }) {
  const client = await clientPromise;
  const db = client.db("creator_store");

  const creator = await db.collection("creators").findOne({ handle: params.handle });
  if (!creator) return NextResponse.json({ error: "Creator not found" }, { status: 404 });

  const products = await db
    .collection("products")
    .find({ "creator.handle": params.handle })
    .toArray();

  return NextResponse.json({ creator, products });
}

