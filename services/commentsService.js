const commentsModel = require('../db/models/commentsModel');

const getComments = () => {
    return commentsModel.getComments();
};

const getCommentsByPost = (postId) => {
    return commentsModel.getCommentsByPost(postId);
};

module.exports = {
    getComments,
    getCommentsByPost
};
