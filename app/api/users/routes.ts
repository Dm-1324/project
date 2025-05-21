import { NextRequest, NextResponse } from "next/server";
import { getAllUsers, createUser } from "@/lib/db/users";

export async function GET() {
  const users = await getAllUsers();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const result = await createUser(data);
  return NextResponse.json({ success: true, id: result.insertedId });
}

// import { NextRequest, NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongoDb';

// export async function GET() {
//   const client = await clientPromise;
//   const db = client.db('your_db_name'); // change this to your DB name
//   const users = await db.collection('users').find({}).toArray();
//   return NextResponse.json(users);
// }

// export async function POST(req: NextRequest) {
//   const client = await clientPromise;
//   const db = client.db('your_db_name');
//   const body = await req.json();
//   const result = await db.collection('users').insertOne(body);
//   return NextResponse.json({ success: true, insertedId: result.insertedId });
// }
