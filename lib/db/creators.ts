

import clientPromise from "@/lib/mongoDb";
import { ObjectId } from "mongodb";

export async function getAllCreators() {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection("creators").find({}).toArray();
}

export async function getCreatorById(id: string) {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection("creators").findOne({ _id: new ObjectId(id) });
}

export async function createCreator(data: any) {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection("creators").insertOne(data);
}

export async function updateCreator(id: string, data: any) {
  const client = await clientPromise;
  const db = client.db();
  return await db
    .collection("creators")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deleteCreator(id: string) {
  const client = await clientPromise;
  const db = client.db();
  return await db.collection("creators").deleteOne({ _id: new ObjectId(id) });
}
