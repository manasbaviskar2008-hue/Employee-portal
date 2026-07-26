import { useState } from "react";

function Employees() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Developer",
      department: "IT"
    },
    {
      id: 2,
      name: "Priya Patil",
      role: "HR Manager",
      department: "HR"
    }
  ]);


  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");


  // Add Employee
  const addEmployee = () => {

    if(name === "" || role === "" || department === ""){
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      name,
      role,
      department
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setRole("");
    setDepartment("");

  };


  // Delete Employee
  const deleteEmployee = (id) => {

    const updatedEmployees = employees.filter(
      (emp) => emp.id !== id
    );

    setEmployees(updatedEmployees);

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
            <th>Action</th>
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

                <td>
                  <button
                    onClick={()=>deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))
          }

        </tbody>


      </table>


    </div>
  );
}

export default Employees;