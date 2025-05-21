import clientPromise from "@/lib/mongoDb";
import { categories, getFeaturedCreators, products } from "@/lib/data";

async function seedDatabase() {
  const client = await clientPromise;
  const db = client.db();

  const categoryCollection = db.collection("categories");
  const creatorsCollection = db.collection("creators");
  const productsCollection = db.collection("products");

  // Optional: clear previous data
  await categoryCollection.deleteMany({});
  await creatorsCollection.deleteMany({});
  await productsCollection.deleteMany({});

  // Insert new data
  await categoryCollection.insertMany(categories);
  // await creatorsCollection.insertMany(getFeaturedCreators);
  await productsCollection.insertMany(products);

  console.log("✅ Seeded MongoDB successfully");
  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error("❌ Error seeding MongoDB:", err);
  process.exit(1);
});
