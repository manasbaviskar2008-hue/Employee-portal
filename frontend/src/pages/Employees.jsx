function Employees() {

  const employees = [
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
  ];

  return (
    <div>
      <h1>Employee Management</h1>

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
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Employees;