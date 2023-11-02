import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://phrs:rss@phrs.lqslvrg.mongodb.net/authapp";
  const client = new MongoClient(uri);
  try {
    const database = client.db('authapp');
    const inventory = database.collection('donor');
    const query = {};
    const products = await inventory.find(query).toArray();
    return NextResponse.json({ success: true, products })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}

export async function POST(request) {
  // Replace the uri string with your connection string.
  let body = await request.json()
  const uri = "mongodb+srv://phrs:rss@phrs.lqslvrg.mongodb.net/authapp";
  const client = new MongoClient(uri);
  try {
    const database = client.db('authapp');
    const inventory = database.collection('donor');
    const product = await inventory.insertOne(body)
    return NextResponse.json({ product, ok: true })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}