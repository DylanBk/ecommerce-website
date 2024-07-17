const express = require('express');
const {create_user} = require('../controllers/user-controller');
const router = express.Router();

router.post('/signup', create_user);

const users = [
    {id: 1, name: "John Smith", email: "johnsmith@domain.com"},
    {id: 1, name: "Jane Smith", email: "janesmith@domain.com"}
]

router.get('/', (req, res) => {
    res.json(users);
    }
);

module.exports = router;