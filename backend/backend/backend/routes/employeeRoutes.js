const express = require("express");

const router = express.Router();


const {

    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee

} = require("../controllers/employeeController");



// GET
router.get("/", getEmployees);


// POST
router.post("/", addEmployee);


// PUT
router.put("/:id", updateEmployee);


// DELETE
router.delete("/:id", deleteEmployee);



module.exports = router;