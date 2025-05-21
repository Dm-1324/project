import clientPromise from "@/lib/mongoDb";
import { ObjectId } from "mongodb";
import { Product } from "@/lib/models/products"; 

export async function getAllProducts() {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db.collection("products").find({}).toArray();
}
// export async function getAllProducts() {
//   const client = await clientPromise;
//   const db = client.db("creator_store");
//   return db.collection("products").find({}).toArray();
// }


export async function getProductById(id: string) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db.collection("products").findOne({ _id: new ObjectId(id) });
}

export async function getProductsByCreatorHandle(handle: string) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db.collection("products").find({ "creator.handle": handle }).toArray();
}

export async function createProduct(product: Product) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db.collection("products").insertOne({
    ...product,
    createdAt: new Date(),
  });
}
// export async function createProduct(data: any) {
//   const client = await clientPromise;
//   const db = client.db("creator_store");
//   return db.collection("products").insertOne({
//     ...data,
//     creatorId: new ObjectId(data.creatorId),
//     createdAt: new Date(),
//   });
// }

export async function updateProduct(id: string, data: any) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db
    .collection("products")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deleteProduct(id: string) {
  const client = await clientPromise;
  const db = client.db("creator_store");
  return db.collection("products").deleteOne({ _id: new ObjectId(id) });
}
