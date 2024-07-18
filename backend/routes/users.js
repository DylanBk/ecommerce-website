const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cookieParser = require('cookie-parser');

router.post('/login', async (req, res) => {
    const { email, password } = await req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User Does Not Exist" });
        }

        bcrypt.compare(password, user.password, function(err, res) {
            if (err) {
                console.error(`Error: ${err}`);
            }
            if (res) {
                console.log("User Logged In Successfully");
            }
            else {
                console.log("Invalid Password");
                return;
            }
        })

        res.cookie("Email", user.email, {
            secure: true,
            httpOnly: true,
            sameSite: 'strict'
        })
        res.cookie("Username", user.username, {
            secure: true,
            httpOnly: true,
            sameSite: 'strict'
        })
        res.cookie("Role", user.role, {
            secure: true,
            httpOnly: true,
            sameSite: 'strict'
        })

        res.redirect('/');
    } catch(error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.post('/signup', async (req, res) => {
    const { email, username, password } = await req.body;

    try {
        let user_check = await User.findOne({ email });
        if (user_check) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        let user = new User ({
            email,
            username,
            password
        });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                user.password = hash;
                await user.save();
            });
        });

        console.log("User Created Successfully");
        res.redirect('/');
    } catch(error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;