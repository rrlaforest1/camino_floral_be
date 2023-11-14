const router = require("express").Router();
const User = require("./../models/User.model");
const UserResponse = require("./../models/UserResponse.model");
const { isAuthenticated } = require("./../middlewares/authMiddlewares");

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const connectedUser = await User.findById(req.userId);
    console.log("connectedUser", connectedUser);

    console.log("req.body post survey", req.body);
    const { categoryIndex, subcategoryIndex, answers } = req.body;
    console.log("categoryIndex", categoryIndex);

    const createdAnswer = await UserResponse.create({
      user: connectedUser._id,
      catIndex: categoryIndex,
      subcatIndex: subcategoryIndex,
      answers: answers,
    });
    res.status(201).json({
      message: `User answers has been created on the DB with id: ${createdAnswer._id}`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
