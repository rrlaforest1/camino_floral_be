const router = require("express").Router();

/**
 * ! All routes are prefixed by /survey
 */

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
