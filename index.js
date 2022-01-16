const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const app = express();
app.use(express.json());
const URL = "mongodb://localhost:27017";
app.use(cors({
    origin : "*"
}))
let arr = "hello world";
app.post("/login",async (req,res)=>{
     try {
         let connection = await mongoClient.connect(URL);
         let db = connection.db("short_url");
         await db.collection("users").insertOne(req.body);
         connection.close();
         res.json({message : "done"})
     } catch (error) {
         console.error(error);
     }
})



app.listen(3000);