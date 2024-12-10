import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
