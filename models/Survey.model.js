const { Schema, model } = require("mongoose");

const surveySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    0: {
      1: [Boolean],
    },
    1: {
      1: [Boolean],
    },
    2: {
      1: [Boolean],
    },
    3: {
      1: [Boolean],
    },
    4: {
      1: [Boolean],
    },
    5: {
      1: [Boolean],
    },
    6: {
      1: [Boolean],
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
