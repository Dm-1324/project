import clientPromise from "@/lib/mongoDb";
import { ObjectId } from "mongodb";

export async function getAllUsers() {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return await db.collection("users").find({}).toArray();
}

export async function getUserById(id: string) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return await db.collection("users").findOne({ _id: new ObjectId(id) });
}

export async function createUser(data: any) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return await db.collection("users").insertOne(data);
}

export async function updateUser(id: string, data: any) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return await db
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deleteUser(id: string) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return await db.collection("users").deleteOne({ _id: new ObjectId(id) });
}
