const mongoose = require('mongoose');
const connection_string = process.env.MONGO_URI;

let isConnected = false;

async function connect_db()  {
    try {
    mongoose.connect(connection_string, {
        serverSelectionTimeoutMS: 5000
    });

    database_connection = mongoose.connection;

    database_connection.on('connected', () => {
        isConnected = true;
        console.log("Database Connected Successfully");
    });

    database_connection.on('error', (err) => {
        console.log(`MongoDB Error: ${err}`);
    });

    database_connection.on('disconnected', () => {
        console.log("Database Disconnected");
    });

    return database_connection;
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = { connect_db };