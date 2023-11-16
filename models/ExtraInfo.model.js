const { Schema, model } = require("mongoose");

const extraInfoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    info: String,
  },
  { timestamps: true }
);

const ExtraInfo = model("ExtraInfo", extraInfoSchema);

module.exports = ExtraInfo;
