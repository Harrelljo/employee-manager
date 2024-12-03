import React, { useState } from 'react';
import './styles.css'; // Assuming you want to style the components

const App = () => {
  const [employees, setEmployees] = useState([]); // state to hold the list of employees
  const [name, setName] = useState(''); // state to hold the input value for new employee

  // Handle form submission
  const handleAddEmployee = (e) => {
    e.preventDefault(); // prevent default form behavior
    if (!name) return; // prevent adding an empty name

    const newEmployee = { name }; // create new employee object
    setEmployees([...employees, newEmployee]); // add new employee to the list
    setName(''); // reset the input field
  };

  return (
    <div className="container">
      <h1>Employee Manager</h1>
      
      {/* Form to add new employee */}
      <form onSubmit={handleAddEmployee} className="employee-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name on input change
          placeholder="Employee Name"
          className="employee-input"
        />
        <button type="submit" className="add-button">Add Employee</button>
      </form>

      {/* Display the employee list */}
      <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee, index) => (
          <li key={index}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
