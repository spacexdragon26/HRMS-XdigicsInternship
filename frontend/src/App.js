import React, { useState } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import SalarySlipForm from './components/SalarySlipForm';
import SalarySlipPdf from './components/SalarySlipPdf';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [salarySlip, setSalarySlip] = useState(null);

  const backendUrl = 'http://localhost:8080'; // Specify the backend server URL here

  const handleEmployeeSubmit = (employee) => {
    if (employee.id) {
      // Update employee
      axios.put(`${backendUrl}/api/employees/${employee.id}`, employee)
        .then(() => {
          setSelectedEmployee(null);
        })
        .catch((error) => console.error('Error updating employee:', error));
    } else {
      // Add new employee
      axios.post(`${backendUrl}/api/employees`, employee)
        .then(() => {
          setSelectedEmployee(null);
        })
        .catch((error) => console.error('Error adding employee:', error));
    }
  };

  const handleGenerateSalarySlip = (employeeId) => {
    axios.get(`${backendUrl}/api/employees/${employeeId}/salary-slip`)
      .then((response) => {
        setSalarySlip(response.data);
      })
      .catch((error) => console.error('Error generating salary slip:', error));
  };

  return (
    <div>
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onSubmit={handleEmployeeSubmit}
      />
      <EmployeeTable onEdit={(employee) => setSelectedEmployee(employee)} />
      <SalarySlipForm onGenerate={handleGenerateSalarySlip} />
      {salarySlip && <SalarySlipPdf salarySlip={salarySlip} />}
    </div>
  );
}

export default App;
