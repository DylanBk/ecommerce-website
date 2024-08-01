const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    let { email, password } = await req.body;

    if (req.session.authenticated) {
        res.status(400).json({ message: `Already Logged In ${session}` })
        let x = req.session.authenticated
        console.log(x)
    } else {
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

            const plain_user = {
                email: user.email,
                username: user.username,
                role: user.role
            }

            try{
                var token = jwt.sign(plain_user, process.env.MY_SECRET, { expiresIn: "1h" });
            }  catch(error) {          
                console.error(error);
            };

            try {
                email = user.email
                username = user.username
                role = user.role

                req.session.token = token;
                req.session.authenticated = true;
                req.session.user = {
                    email,
                    username,
                    role
                };
                res.redirect('/');
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
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
            email: email,
            username: username,
            password: password
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