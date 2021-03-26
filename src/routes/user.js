const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/users", user.getAll);

router.post("/users", user.insertUser);

module.exports = router;
