import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'

const uri = `mongodb+srv://TDFMongoDB:${process.env.DB_PASSWORD}@cluster0.eqxokmp.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export const DBConnect= async ()=>{
  console.log('DB password is', process.env.DB_PASSWORD)
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}catch(err){
    console.log(err)
    process.exit(1)
} 
}

export default DBConnect;