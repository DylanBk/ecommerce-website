require('dotenv').config({ path: '../.env' });
const cors = require('cors');
const express = require('express');
const app = express();
const { connect_db } = require('./db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const users_router = require('./routes/users');
const product_options_router = require('./routes/product-options');
const products_options_router = require('./routes/products-options');

connect_db();


// --- SETUP ---

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));
app.use(express.static(path.join(__dirname, '../frontend/public')));
index_path = path.join(__dirname, '../frontend/public', 'index.html');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet());

app.use(session({
    secret: process.env.MY_SECRET,
    cookie: {
        maxAge: 30000,
        secure: false,
        httpOnly: true,
        sameSite: true
    },
    saveUninitialized: false
}))


// SET VIEW ENGINE

app.set("view engine", "ejs");


// CONNECT CSS

app.get('../src/style.css', (req, res) => {
    console.log('Request received for style.css');
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'src', 'style.css'));
});


// --- ROUTES ---

const {get_products} = require('./controllers/get-products');

const handle_index_routes = (req, res) => {
    get_products();
    res.sendFile(index_path);
    res.send("Backend Test");
}

app.get('/', handle_index_routes);
app.get('/home', handle_index_routes);
app.get('/index', handle_index_routes);


// --- SESSION STATUS ROUTE ---
app.get('/session-status', (req, res) => {
    if (req.session.user) {
        res.json({
            sessionExists: true,
            user: req.session.user
        });
    } else {
        res.json({ sessionExists: false });
    };
})


// --- USER RELATED ROUTES ---
app.use('/api/users', users_router);
app.use('/api/product', product_options_router);
app.use('/api/products', products_options_router);



// --- main program ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer running on http://localhost:${PORT}`))