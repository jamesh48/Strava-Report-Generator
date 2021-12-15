import { Response } from "express";

module.exports = {
  send400: (res: Response, message: string) => {
    console.log(message);
    res.status(400).send(message);
  },
  send401: (res: Response, message: string) => {
    console.log(message);
    res.status(401).send(message);
  },
  send500: (res: Response, message: string) => {
    console.log(message);
    res.status(500).send(message);
  }
};
