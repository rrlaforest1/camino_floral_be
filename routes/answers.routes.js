const router = require("express").Router();
const User = require("./../models/User.model");
const UserResponse = require("./../models/UserResponse.model");
const ExtraInfo = require("./../models/ExtraInfo.model");
const { isAuthenticated } = require("./../middlewares/authMiddlewares");

/**
 * ! All routes are prefixed by /answers
 */

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const connectedUser = await User.findById(req.userId);
    const { categoryIndex, subcategoryIndex, answers, finished } = req.body;

    const createdAnswer = await UserResponse.create({
      user: connectedUser._id,
      catIndex: categoryIndex,
      subcatIndex: subcategoryIndex,
      answers: answers,
      finished,
    });
    res.status(201).json({
      message: `User answers has been created on the DB with id: ${createdAnswer._id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/extrainfo", isAuthenticated, async (req, res, next) => {
  try {
    const connectedUser = await User.findById(req.userId);
    console.log("connectedUser", connectedUser);

    console.log("extrainfo", req.body);

    const { info } = req.body;

    const createdInfo = await ExtraInfo.create({
      user: connectedUser._id,
      info: info,
    });
    res.status(201).json({
      message: `User extra has been created on the DB with id: ${createdInfo._id}`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
