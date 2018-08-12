var express = require('express');
var router = express.Router();

router.get('/posts', function(req, res) {
    var posts = require('../posts.json');
    res.json(posts);
});

module.exports = router;
