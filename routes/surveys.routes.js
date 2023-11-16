const router = require("express").Router();

const Survey = require("./../models/Survey.model");

/**
 * ! All routes are prefixed by /survey
 */

router.get("/", async (req, res, next) => {
  try {
    const formES = await Survey.find({
      lang: "ES",
    });
    res.json(formES);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
