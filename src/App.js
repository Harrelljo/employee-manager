import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Employee Manager</h1>

        <EmployeeForm addEmployee={addEmployee} />

        <h2>Employee List</h2>
        <EmployeeList employees={employees} />

        <Routes>
          <Route path="/employee/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
