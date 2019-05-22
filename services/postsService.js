const postsModel = require('../db/models/postsModel');

const getPosts = () => {
    return postsModel.getPosts();
};

module.exports = {
    getPosts
};
