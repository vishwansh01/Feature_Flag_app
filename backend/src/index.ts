import { Request, Response } from "express";

const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  const body = req.body;
  res.status(200).json({ msg: `Received ${body.text}` });
});
app.listen(4000, () => {
  console.log("Running on port");
});
