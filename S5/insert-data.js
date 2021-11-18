'use strict'

const { MongoClient } = require("mongodb");
//import mongodb from 'MongoClient';
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://greg:greg@cluster0.6brqs.mongodb.net/TestDB?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "TestDB";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("Test");

         // Construct a document                                                                                                                                                              
         let personDocument =  {
            "name": "Gloomhaven",
            "genre": "thematic",
            "mechanisms": [
              "Cooperative play",
              "Capmpaign driven",
              "Hand Management",
              "Storytelling",
              "Role Playing"
            ],
            "description": "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make."
          }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);