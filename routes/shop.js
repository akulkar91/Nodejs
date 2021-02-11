const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/',(req, res, next) => { //second middleware
    // console.log("I'm in the second middleware");
    // send
    res.sendFile(path.join(rootDir, 'views','shop.html'));
});

module.exports = router;