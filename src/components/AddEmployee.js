import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    EmployeeId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.EmployeeId) {
      addEmployee(employee);
      setEmployee({ name: "", EmployeeId: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Employee Name"
      />
      <input
        type="text"
        name="EmployeeId"
        value={employee.EmployeeId}
        onChange={handleChange}
        placeholder="Employee ID"
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
