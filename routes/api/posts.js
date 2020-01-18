const express = require('express');
const router = express.Router();

//@route  GET api/posts
//@desc   TEST Route
//@access Public

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
