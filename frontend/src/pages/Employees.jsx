import { useEffect, useState } from "react";
import axios from "axios";


function Employees() {

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");


  // Get employees from backend
  useEffect(() => {

    axios
      .get("http://localhost:5000/api/employees")
      .then((response) => {

        setEmployees(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);



  // Add employee
  const addEmployee = () => {

    const newEmployee = {
      name,
      role,
      department
    };


    axios
      .post(
        "http://localhost:5000/api/employees",
        newEmployee
      )
      .then((response)=>{

        setEmployees([
          ...employees,
          response.data
        ]);


        setName("");
        setRole("");
        setDepartment("");

      })
      .catch((error)=>{

        console.log(error);

      });

  };



  return (
    <div>

      <h1>👨‍💼 Employee Management</h1>


      <h3>Add New Employee</h3>


      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>


      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
      />

      <br/><br/>


      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
      />

      <br/><br/>


      <button onClick={addEmployee}>
        Add Employee
      </button>


      <hr/>


      <h3>Employee List</h3>


      <table border="1">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>

        </thead>


        <tbody>

          {
            employees.map((emp)=>(

              <tr key={emp.id}>

                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.department}</td>

              </tr>

            ))
          }

        </tbody>


      </table>


    </div>
  );
}


export default Employees;