const express = require('express'),
    router = express.Router();

const commentsService = require('../../services/commentsService');

router.get('/', (req, res) => {
    commentsService.getComments()
        .then(comments => {
            res.json(comments);
        })
        .catch(error => {

        })
});

router.get('/posts/:postId', (req, res) => {
    commentsService.getCommentsByPost(parseInt(req.params.postId))
        .then(comments => {
            res.json(comments);
        })
        .catch(error => {

        })
});

module.exports = router;
