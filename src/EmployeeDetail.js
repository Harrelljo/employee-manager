import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
}

export default EmployeeDetail;
