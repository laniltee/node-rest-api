const albumsModel = require('../db/models/albumsModel');

const getAlbums = () => {
    return albumsModel.getAlbums();
};

module.exports = {
    getAlbums
};
