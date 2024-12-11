import React, { useState } from 'react';
import axios from 'axios';

function SalarySlipForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [salarySlip, setSalarySlip] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/salary-slips/${employeeId}`)
      .then((response) => setSalarySlip(response.data))
      .catch((error) => console.error(error));
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement(
      'input',
      {
        type: 'number',
        value: employeeId,
        onChange: (e) => setEmployeeId(e.target.value),
        placeholder: 'Employee ID',
        required: true
      }
    ),
    React.createElement('button', { type: 'submit' }, 'Generate Salary Slip'),
    salarySlip && React.createElement(
      'div',
      null,
      React.createElement('p', null, `Net Salary: ${salarySlip.netSalary}`),
      React.createElement('p', null, `PF Deduction: ${salarySlip.pfDeduction}`),
      React.createElement('p', null, `Professional Tax: ${salarySlip.professionalTax}`)
    )
  );
}

export default SalarySlipForm;
