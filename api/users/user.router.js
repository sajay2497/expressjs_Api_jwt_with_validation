const {  createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser} = require("./user.controller");

const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation")
const {addUserValidation,loginUserValidation } = require('../../validation/users/user.validation')
router.get("/", checkToken,getUsers);
router.post("/", addUserValidation, createUser);
router.get("/:id", checkToken,getUserByUserId);
router.patch("/",checkToken, updateUsers);
router.delete("/", checkToken,deleteUser);
router.post("/login", loginUserValidation, login);

module.exports = router;