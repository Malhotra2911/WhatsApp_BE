const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  allUsersList,
  promoteUserToAdmin,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/userlist", allUsersList);
router.put('/:id/promote', promoteUserToAdmin);
module.exports = router;
