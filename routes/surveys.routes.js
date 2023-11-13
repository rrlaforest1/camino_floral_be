const router = require("express").Router();
const Survey = require("./../models/Survey.model");

/**
 * ! All routes are prefixed by /survey
 */

router.post("/", async (req, res, next) => {
  try {
    const myId = req.userId;
    const otherId = req.body.id;
    const alreadyExist = await Conversation.findOne({
      participants: { $all: [myId, otherId] },
    });
    if (alreadyExist) {
      return res.status(400).json({ message: "Conversation already exists" });
    }
    const newConversation = await Conversation.create({
      participants: [myId, otherId],
    });
    res.status(201).json(newConversation);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allConversationsOfUser = await Conversation.find({
      participants: { $in: [req.userId] },
    }).populate("participants");
    res.json(allConversationsOfUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
