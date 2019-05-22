const handleHttpErrorNotFound = (req, res, next) => {
    console.error('request path not found');
    res.status(400).send({
        status: 400,
        message: 'request path not found'
    });
};

const handleHttpErrorUnauthorized = (req, res, next) => {
    console.error('unauthorized error');
    res.status(401).send({
        status: 401,
        message: 'unauthorized error'
    });
};

const handleInternalServerError = (error, req, res, next) => {
    console.error(error);
    res.status(500).send({
        status: 500,
        message: error
    });
};


module.exports = {
    handleHttpErrorNotFound,
    handleInternalServerError,
    handleHttpErrorUnauthorized
};
