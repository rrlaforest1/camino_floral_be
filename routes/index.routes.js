const router = require("express").Router();
const User = require("./../models/User.model");
// const { isAuthenticated } = require("./../middlewares/authMiddlewares");
/**
 * ! All routes are prefixed by
 */

// router.get("/", async (req, res, next) => {
// 	try {
// 		const user = await User.findById("hello")
// 		res.json(user)
// 	} catch (error) {
// 		next({ error, route: "/api/conversation" })
// 	}
// })

router.use("/survey", require("./surveys.routes"));

router.use("/auth", require("./auth.routes"));

// router.use(isAuthenticated);

router.use("/users", require("./users.routes"));
// router.use("/conversation", require("./conversation.routes"));
// router.use("/messages", require("./messages.routes"));

module.exports = router;
