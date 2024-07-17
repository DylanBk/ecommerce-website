require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const {connect_db} = require('./db');
const path = require('path');
const users_router = require('./routes/users');

connect_db();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '../frontend/public')));
index_path = path.join(__dirname, '../frontend/public', 'index.html');

app.get('../src/style.css', (req, res) => {
    console.log('Request received for style.css');
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'src', 'style.css'));
});



app.use(express.json()); // middleware

// --- ROUTES ---


app.use('/api/users', users_router);

const handle_index_routes = (req, res) => {
    res.sendFile(index_path);
    res.send("Backend Test");
}

app.get('/', handle_index_routes);
app.get('/home', handle_index_routes);
app.get('/index', handle_index_routes);

// --- USER RELATED ROUTES ---
// app.get('/users', users_router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer running on http://localhost:${PORT}`))