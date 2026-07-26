const express = require("express");

const router = express.Router();


const {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee

} = require("../controllers/employeeController");



// GET ALL
router.get("/", getEmployees);


// ADD
router.post("/", addEmployee);


// UPDATE
router.put("/:id", updateEmployee);


// DELETE
router.delete("/:id", deleteEmployee);



module.exports = router;