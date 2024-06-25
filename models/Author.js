const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_number: { type: Number, default: 100000 },
  DOB: Date,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = mongoose.model("Author", AuthorSchema);
