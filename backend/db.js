const { MongoClient } = require('mongodb');
require('dotenv').config();

const connect_db = async () => {
    try {
        const client = new MongoClient(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect(); // Wait for database connection

        console.log('MongoDB Connected Successfully');

        const database = client.db('users');

        const collections = await database.collections(); // Wait for db collections to be fetched
        console.log('Collections:', collections.map(col => col.collectionName)); // List all db collections

        const collection = database.collection('users');

        // Example operation: insert a document
        // await collection.insertOne({ name: "Jane Doe", email: "jane@example.com" });

        // Example operation: find documents
        const users = await collection.find().toArray();
        console.log('Users:', users);

        // Close the connection when done
        await client.close();

    } catch (error) {
        console.log(`URI: ${process.env.MONGO_URI}`);
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    }
};

const get_db = () => {
    console.log("Database retrieved")
    return client.db();
}

module.exports = { connect_db, get_db };