import clientPromise from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("creator_store");
  const creators = await db.collection("creators").find({}).toArray();

  const formattedCreators = creators.map((creator) => ({
    id: creator._id.toString(),
    name: creator.name,
    handle: creator.handle,
    profileImage: creator.profileImage,
    category: creator.category,
    followers: creator.followers,
    socialsCount: creator.socialsCount,
    verified: creator.verified,
    description: creator.description,
    productCount: creator.productCount,
  }));
  return NextResponse.json(formattedCreators);
}

// import { NextRequest, NextResponse } from "next/server";
// import { getAllCreators, createCreator } from "@/lib/db/creators";

// export async function GET() {
//   const creators = await getAllCreators();
//   return NextResponse.json(creators);
// }

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const result = await createCreator(data);
//   return NextResponse.json({ success: true, id: result.insertedId });
// }
