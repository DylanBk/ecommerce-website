const bcrypt = require('bcrypt');
const {get_db} = require('../db');

const create_user = async (req, res) => {
    const {email, username, password} = req.body;

    try {
        const db = get_db();
        const users_collection = db.collection('users');

        const existing_user = await users_collection.findOne({email});
        if (existing_user) {
            return res.status(400).json({ message: "An account with that email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);

        const new_user = { email: email, username: username, password: hashed_password };
        await users_collection.insertOne(new_user);

        res.status(201).json({ message: "User Created Successfully" });
    }
    catch (error) {
        console.error(`Error: ${error.message}`)
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {create_user};