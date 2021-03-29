const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/users", user.getAll);

router.post("/users", user.insertUser);
 
router.delete("/users/:id", user.deleteUser);

router.put("/users/:id", user.updateUser);

module.exports = router;
