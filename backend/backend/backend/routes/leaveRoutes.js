const express = require("express");

const router = express.Router();

const { checkLeave } = require("../controllers/leaveController");


router.post("/", checkLeave);


module.exports = router;