const router = require("express").Router();
const Survey = require("../models/Survey.model");
const { isAuthenticated } = require("./../middlewares/authMiddlewares");

/**
 * ! All routes are prefixed by /admin
 */

router.put("/:formId", isAuthenticated, async (req, res, next) => {
  try {
    const { formId } = req.params;
    console.log("formId", formId);
    const updatedForm = await Survey.findByIdAndUpdate(formId, req.body, {
      new: true,
    });
    if (!updatedForm) {
      return res.status(401).json({ message: "Denied !" });
    }
    res.status(202).json(updatedForm);
  } catch (error) {
    next(error);
  }
});

// router.delete("/", isAuthenticated, async (req, res, next) => {
//   try {
//     await UserResponses.deleteMany({
//       user: req.userId,
//       archived: false,
//     });
//     console.log("all deleted");
//     res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
