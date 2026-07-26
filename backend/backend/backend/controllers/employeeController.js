const pool = require("../config/db");


// GET ALL EMPLOYEES
const getEmployees = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM employees ORDER BY id"
        );

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};



// ADD EMPLOYEE
const addEmployee = async (req, res) => {

    const { name, role, department } = req.body;


    try {

        const result = await pool.query(

            "INSERT INTO employees(name, role, department) VALUES($1,$2,$3) RETURNING *",

            [name, role, department]

        );


        res.json(result.rows[0]);


    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};



// UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {

    const { id } = req.params;

    const { name, role, department } = req.body;


    try {

        const result = await pool.query(

            "UPDATE employees SET name=$1, role=$2, department=$3 WHERE id=$4 RETURNING *",

            [name, role, department, id]

        );


        res.json(result.rows[0]);


    } catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {

    const { id } = req.params;


    try {

        await pool.query(

            "DELETE FROM employees WHERE id=$1",

            [id]

        );


        res.json({
            message:"Employee deleted successfully"
        });


    } catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};



module.exports = {

    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee

};