import { MongoClient, ServerApiVersion } from "mongodb"
const uri =process.env.MONGODB_URL || ""
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db("GC-02")
