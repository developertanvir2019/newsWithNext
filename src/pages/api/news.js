// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://server11:server11@cluster0.czo9kw9.mongodb.net/mydatabase?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: {
//         version: '1', // Correct version string for v1
//     },
// });

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected successfully to the database!");
//         // You can perform database operations here after connecting
//     } catch (err) {
//         console.error("Error connecting to the database:", err);
//     } finally {
//         // Ensure to close the client when you're done with it
//         await client.close();
//     }
// }

// module.exports = run;
