import React, { useState } from 'react';
import './styles.css'; // Assuming you want to style the components

const App = () => {
  // State to hold the list of employees
  const [employees, setEmployees] = useState([]);
  // State to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handle form submission
  const handleAddEmployee = (e) => {
    e.preventDefault(); // prevent default form behavior
    if (!name || !email || !phone) return; // prevent adding if any field is empty

    const newEmployee = { name, email, phone }; // create new employee object
    setEmployees([...employees, newEmployee]); // add new employee to the list
    setName(''); // reset input fields
    setEmail('');
    setPhone('');
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email on input change
          placeholder="Employee Email"
          className="employee-input"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} // Update phone on input change
          placeholder="Employee Phone"
          className="employee-input"
        />
        <button type="submit" className="add-button">Add Employee</button>
      </form>

      {/* Display the employee list */}
      <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee, index) => (
          <li key={index}>
            <strong>{employee.name}</strong><br />
            Email: {employee.email}<br />
            Phone: {employee.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
