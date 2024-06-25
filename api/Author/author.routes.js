const express = require("express");
const { getAllAuthors, CreateAuthor } = require("./author.controllers");
const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", CreateAuthor);

module.exports = authorRouter;
