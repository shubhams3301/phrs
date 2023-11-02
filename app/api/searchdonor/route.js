import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
const query = request.nextUrl.searchParams.get("query") 
// Replace the uri string with your connection string.
const uri = "mongodb+srv://phrs:rss@phrs.lqslvrg.mongodb.net/authapp";
const client = new MongoClient(uri); 
  try {
    const database = client.db('authapp');
    const inventory = database.collection('donor'); 
 
    const products = await inventory.aggregate([{
        $match: {
          $or: [
            { name_location: { $regex: query, $options: "i" } }, // Partial matching for name field
           ]
        }
      }
    ]).toArray()
    return NextResponse.json({ success: true, products})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  } 

}