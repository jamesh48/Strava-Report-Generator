module.exports = {
  send400: (res, message) => {
    console.log(message)
    res.status(400).send(message);
  },
  send401: (res, message) => {
    console.log(message)
    res.status(401).send(message);
  },
  send500: (res, message) => {
    console.log(message)
    res.status(500).send(message)
  }
};
