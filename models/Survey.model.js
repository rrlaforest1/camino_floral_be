const { Schema, model } = require("mongoose");

const subCategorySchema = new Schema({
  subCategoryIndex: Number,
  name: String,
  flower: String,
  questions: [String],
});
const categorySchema = new Schema({
  categoryIndex: Number,
  name: String,
  subsections: [subCategorySchema],
});

const surveySchema = new Schema(
  {
    categories: [categorySchema],
  },
  { timestamps: true }
);

const Survey = model("Survey", surveySchema);

module.exports = Survey;
