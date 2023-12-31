const { Schema, model } = require("mongoose");

const userResponseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    catIndex: Number,
    subcatIndex: Number,
    answers: [Boolean],
    finished: {
      type: Boolean,
      default: false,
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const UserResponse = model("UserResponse", userResponseSchema);

module.exports = UserResponse;
