import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [employeeName, setEmployeeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { EmployeeId: Date.now(), name: employeeName };
    addEmployee(newEmployee);
    setEmployeeName("");
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter employee name"
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;

