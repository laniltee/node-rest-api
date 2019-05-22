const express = require('express'),
    router = express.Router();

const handleHttpErrorNotFound = require('../routes/middlewares/httpErrorHandler').handleHttpErrorNotFound;
const handleInternalServerError = require('../routes/middlewares/httpErrorHandler').handleInternalServerError;

const postsController = require('../routes/controllers/postsController');
const albumsController = require('../routes/controllers/albumsController');
const commentsController = require('../routes/controllers/commentsController');

// Add your routes here
router.use('/posts', postsController);
router.use('/albums', albumsController);
router.use('/comments', commentsController);

// Router middleware
router.use(handleInternalServerError);
router.use(handleHttpErrorNotFound);

module.exports = router;
