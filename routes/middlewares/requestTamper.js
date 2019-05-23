const uuidv1 = require('uuid/v1');

const requestTamper = (req, res, next) => {
    const correlationId = uuidv1();
    req.headers['X-Co-Relation-Id'] = correlationId;
    res.set('X-Co-Relation-Id', correlationId);
    next();
};

module.exports = {
    requestTamper
};
