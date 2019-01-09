//imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//creating a router app
const router = express.Router();

//taking all incoming data
router.use(bodyParser.urlencoded({extended: false}));

//routes
router.get('/catalog', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'catalog.html'));
});

router.post('/catalog', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

//exports
module.exports = router;