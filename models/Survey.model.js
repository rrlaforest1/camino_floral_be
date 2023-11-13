const { Schema, model } = require("mongoose");

const surveySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    0: {
      answers: [Boolean],
    },
    1: {
      answers: [Boolean],
    },
    2: {
      answers: [Boolean],
    },
    3: {
      answers: [Boolean],
    },
    4: {
      answers: [Boolean],
    },
    5: {
      answers: [Boolean],
    },
    6: {
      answers: [Boolean],
    },
    comment: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Survey = model("Survey", surveySchema);

module.exports = Survey;
