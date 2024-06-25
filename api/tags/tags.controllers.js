const tag = require("../../models/tag");

const getAllTags = async (req, res, next) => {
  try {
    const tags = await tag.find();
    return res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};
const CreateTag = async (req, res, next) => {
  try {
    const tag = await tag.create(rea.body);
    return res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTags, CreateTag };
