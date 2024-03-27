import {MongoClient} from "mongodb";
const connectionString = 'mongodb+srv://jairjuniorccs:FqWFYSNTj9bmX3Rh@cluster0.aszkivt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// process.env.ATLAS_URI;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = async()=>{await client.connect();}
  
  
} catch(e) {
  console.error(e);
}
let db = conn.db;
const results = async()=>{ await db.collection("users").find().toJson();}
console.log(results)
// results.map(item=>{
//   console.log(item.id,item.name)
// })

export default db;