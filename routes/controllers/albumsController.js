const express = require('express'),
    router = express.Router();

const albumsService = require('../../services/albumsService');

router.get('/', (req, res) => {
    albumsService.getAlbums()
        .then(albums => {
            res.json(albums);
        })
        .catch(error => {

        })
});

module.exports = router;
