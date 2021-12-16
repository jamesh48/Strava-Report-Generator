"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send500 = exports.send429 = exports.send401 = exports.send400 = void 0;
const send400 = (res, message) => {
    console.log(message);
    res.status(400).send(message);
};
exports.send400 = send400;
const send401 = (res, message) => {
    console.log(message);
    res.status(401).send(message);
};
exports.send401 = send401;
const send429 = (res, message) => {
    res.status(429).send(message);
};
exports.send429 = send429;
const send500 = (res, message) => {
    res.status(500).send(message);
};
exports.send500 = send500;
//# sourceMappingURL=sendErrorCodes.js.map