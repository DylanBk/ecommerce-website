const mongoose = require('mongoose');
const connection_string = process.env.MONGO_URI;

function connect_db()  {
    mongoose.connect(connection_string);

    database_connection = mongoose.connection;

    database_connection.on('connected', () => {
        console.log("Database Connected Successfully");
    });

    database_connection.on('error', (err) => {
        console.log(`MongoDB Error: ${err}`);
    });

    database_connection.on('disconnected', () => {
        console.log("Database Disconnected");
    });
}

module.exports = { connect_db };