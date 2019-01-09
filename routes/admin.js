//imports
const express = require('express');
const path = require('path');


//creating a router app
const router = express.Router();

//routes
router.get('/my-service', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'service.html'));
});

//exports
module.exports = router;