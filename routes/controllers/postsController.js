const express = require('express'),
    router = express.Router();

const postsService = require('../../services/postsService');

router.get('/', (req, res, next) => {
    postsService.getPosts()
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            next(error)
        })
});

module.exports = router;
