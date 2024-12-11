import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    basicSalary: '',
    designation: '',
    department: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the employee data to the backend API
    axios.post('http://localhost:8080/api/employees', employee) // Adjust the URL to match your backend
      .then((response) => {
        console.log('Employee data submitted:', response.data);
        // Optionally, reset form or give feedback
        setEmployee({
          name: '',
          email: '',
          basicSalary: '',
          designation: '',
          department: '',
        });
      })
      .catch((error) => {
        console.error('There was an error submitting the employee data:', error);
      });
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement('h2', null, 'Employee Form'),
    React.createElement('div', null,
      React.createElement('label', { htmlFor: 'name' }, 'Name:'),
      React.createElement('input', {
        type: 'text',
        id: 'name',
        name: 'name',
        value: employee.name,
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', null,
      React.createElement('label', { htmlFor: 'email' }, 'Email:'),
      React.createElement('input', {
        type: 'email',
        id: 'email',
        name: 'email',
        value: employee.email,
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', null,
      React.createElement('label', { htmlFor: 'basicSalary' }, 'Basic Salary:'),
      React.createElement('input', {
        type: 'number',
        id: 'basicSalary',
        name: 'basicSalary',
        value: employee.basicSalary,
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', null,
      React.createElement('label', { htmlFor: 'designation' }, 'Designation:'),
      React.createElement('input', {
        type: 'text',
        id: 'designation',
        name: 'designation',
        value: employee.designation,
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('div', null,
      React.createElement('label', { htmlFor: 'department' }, 'Department:'),
      React.createElement('input', {
        type: 'text',
        id: 'department',
        name: 'department',
        value: employee.department,
        onChange: handleChange,
        required: true
      })
    ),
    React.createElement('button', { type: 'submit' }, 'Submit')
  );
};

export default EmployeeForm;
