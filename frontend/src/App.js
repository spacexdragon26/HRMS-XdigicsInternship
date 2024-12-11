import React, { useState } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import SalarySlipForm from './components/SalarySlipForm';
import SalarySlipPdf from './components/SalarySlipPdf';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const backendUrl = 'http://localhost:8080'; // Specify the backend server URL here

  const handleEmployeeSubmit = function(employee) {
    // Submit the employee data to the backend API
    if (employee.id) {
      // Update employee
      axios.put(`${backendUrl}/api/employees/${employee.id}`, employee)
        .then(function() {
          setSelectedEmployee(null);
        });
    } else {
      // Add new employee
      axios.post(`${backendUrl}/api/employees`, employee)
        .then(function() {
          setSelectedEmployee(null);
        });
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement(EmployeeForm, {
      selectedEmployee: selectedEmployee,
      onSubmit: handleEmployeeSubmit
    }),
    React.createElement(EmployeeTable, null),
    React.createElement(SalarySlipForm, null),
    selectedEmployee && React.createElement(SalarySlipPdf, { salarySlip: selectedEmployee.salarySlip })
  );
}

export default App;
