const express = require("express");
const { CreateTag, getAllTags } = require("./tags.controllers");

const tagRouter = express.Router();

tagRouter.get("/", getAllTags);
tagRouter.post("/", CreateTag);

module.exports = tagRouter;
