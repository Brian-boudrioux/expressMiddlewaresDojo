const router = require("express").Router();
const { getAll, getOneById, createOne, putOne, removeOne } = require("../controllers/users.controller");
const {validateUser, validateUserUpdate} = require("../middlewares/validateUser");

router.get("/users", getAll);
router.get("/users/:id", getOneById);
router.post("/users", validateUser, createOne);
router.put("/users/:id", validateUserUpdate, putOne);
router.delete("/users/:id", removeOne);

module.exports = router;
