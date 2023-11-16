require("dotenv").config();
require("./../db");

const UserResponse = require("./../models/UserResponse.model");
const ExtraInfo = require("./../models/ExtraInfo.model");

(async function () {
  try {
    await UserResponse.deleteMany();
    await ExtraInfo.deleteMany();
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
})();
