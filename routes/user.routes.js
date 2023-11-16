const router = require("express").Router();
const Survey = require("../models/Survey.model");
const UserResponses = require("../models/UserResponse.model");
const { isAuthenticated } = require("./../middlewares/authMiddlewares");

/**
 * ! All routes are prefixed by /user
 */

// find user.
router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const surveyAnswers = await UserResponses.find({
      user: req.userId,
      archived: false,
    });
    let responseValues = [];
    const survey = await Survey.findOne({ lang: "ES" });
    for (const response of surveyAnswers) {
      const category = survey.categories.find(
        (cat) => cat.categoryIndex === response.catIndex
      );
      const subCategory = category.subsections.find(
        (_, subIndx) => subIndx === response.subcatIndex
      );
      const alreadyExist = responseValues.find(
        (cat) => cat.category === category.name
      );
      if (!alreadyExist) {
        responseValues.push({
          subCategory: [subCategory],
          category: category.name,
          response: { [response.subcatIndex]: response },
        });
      } else {
        alreadyExist.response[response.subcatIndex] = response;
        alreadyExist.subCategory.push(subCategory);
      }
    }

    res.json(responseValues);
  } catch (error) {
    next(error);
  }
});

router.put("/", isAuthenticated, async (req, res, next) => {
  try {
    const updatedMessage = await UserResponses.updateMany(
      {
        user: req.userId,
      },
      {
        archived: true,
      },
      { new: true }
    );
    if (!updatedMessage) {
      return res.status(401).json({ message: "Denied !" });
    }
    res.status(202).json(updatedMessage);
  } catch (error) {
    next(error);
  }
});

router.put("/:resId", isAuthenticated, async (req, res, next) => {
  try {
    const { resId } = req.params;
    const updatedMessage = await UserResponses.findByIdAndUpdate(
      resId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedMessage) {
      return res.status(401).json({ message: "Denied !" });
    }
    res.status(202).json(updatedMessage);
  } catch (error) {
    next(error);
  }
});

router.delete("/", isAuthenticated, async (req, res, next) => {
  try {
    await UserResponses.deleteMany({
      user: req.userId,
      archived: false,
    });
    console.log("all deleted");
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const oneUser = await User.findOne({ _id: id });
//     res.json(oneUser);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
