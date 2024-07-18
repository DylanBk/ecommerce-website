require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const { connect_db } = require('./db');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const users_router = require('./routes/users');

connect_db();


// --- MIDDLEWARE ---

app.use(express.static(path.join(__dirname, '../frontend/public')));
index_path = path.join(__dirname, '../frontend/public', 'index.html');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet());


// SET VIEW ENGINE

app.set("view engine", "ejs");


// CONNECT CSS

app.get('../src/style.css', (req, res) => {
    console.log('Request received for style.css');
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'src', 'style.css'));
});


// --- ROUTES ---

const handle_index_routes = (req, res) => {
    res.sendFile(index_path);
    res.send("Backend Test");
}

app.get('/', handle_index_routes);
app.get('/home', handle_index_routes);
app.get('/index', handle_index_routes);


// --- USER RELATED ROUTES ---
app.use('/api/users', users_router);


// --- main program ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer running on http://localhost:${PORT}`))