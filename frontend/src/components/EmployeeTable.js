import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (employee) => {
    // Trigger the employee form with selected employee data
  };

  return React.createElement(
    'table',
    null,
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement('th', null, 'Name'),
        React.createElement('th', null, 'Email'),
        React.createElement('th', null, 'Department'),
        React.createElement('th', null, 'Designation'),
        React.createElement('th', null, 'Basic Salary'),
        React.createElement('th', null, 'Actions')
      )
    ),
    React.createElement(
      'tbody',
      null,
      employees.map((employee) =>
        React.createElement(
          'tr',
          { key: employee.id },
          React.createElement('td', null, employee.name),
          React.createElement('td', null, employee.email),
          React.createElement('td', null, employee.department),
          React.createElement('td', null, employee.designation),
          React.createElement('td', null, employee.basicSalary),
          React.createElement(
            'td',
            null,
            React.createElement('button', { onClick: () => handleEdit(employee) }, 'Edit')
          )
        )
      )
    )
  );
}

export default EmployeeTable;
