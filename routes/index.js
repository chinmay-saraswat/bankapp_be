// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

console.log('userRouter:', userRouter); // Log to check import
console.log('accountRouter:', accountRouter); // Log to check import
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;