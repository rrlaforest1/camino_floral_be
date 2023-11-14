const router = require("express").Router();
const User = require("./../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { isAuthenticated } = require("./../middlewares/authMiddlewares");
const saltRounds = 12;

/**
 * ! All routes are prefixed by /api/auth
 */

// const fileUploader = require("./../config/cloudinaryConfig");

router.post(
  "/signup",
  //   fileUploader.single("picture"),
  async (req, res, next) => {
    try {
      // Get infos from req.body
      // username, password
      //   console.log(req.body, req.file);

      // return res.send("ok")

      const { username, email, password } = req.body;
      // 1- Is the password safe?
      const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message:
            "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
        });
      }
      // 2- Check if the user exist
      // The email might already be used
      const foundUser = await User.findOne({ email: email });
      if (foundUser) {
        return res
          .status(400)
          .json({ message: `The email ${email} is already used.` });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Save the user in the DB

      //   let picture;
      //   if (req.file) {
      //     picture = req.file.path;
      //   }
      const createdUser = await User.create({
        username,
        email,
        password: hashedPassword,
        // picture,
      });
      res.status(201).json({
        message: `User ${createdUser.username} has been created with id ${createdUser._id}`,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", async (req, res, next) => {
  try {
    console.log("login rout BE", req.body);
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email }).select("password email");
    if (!foundUser) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    // console.log(foundUser, isPasswordCorrect, { email, password })

    const payload = { _id: foundUser._id };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "2d",
    });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

/**
 * This route will be usefull once we have a frontend.
 */
router.get("/verify", isAuthenticated, async (req, res, next) => {
  try {
    const connectedUser = await User.findById(req.userId);
    // console.log("connectedUser", connectedUser);
    res.json(connectedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
