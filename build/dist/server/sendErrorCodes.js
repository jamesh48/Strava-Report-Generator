module.exports = {
    send400: function (res, message) {
        console.log(message);
        res.status(400).send(message);
    },
    send401: function (res, message) {
        console.log(message);
        res.status(401).send(message);
    },
    send500: function (res, message) {
        console.log(message);
        res.status(500).send(message);
    }
};
//# sourceMappingURL=sendErrorCodes.js.map