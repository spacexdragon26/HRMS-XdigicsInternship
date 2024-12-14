import React, { useState } from 'react';
import axios from 'axios';
import SalarySlipPdf from './SalarySlipPdf'; // Import the SalarySlipPdf component

function SalarySlipForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [salarySlip, setSalarySlip] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/salary-slips/${employeeId}`)
      .then((response) => setSalarySlip(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Employee ID"
          required
        />
        <button type="submit">Generate Salary Slip</button>
      </form>

      {salarySlip && (
        <div>
          <p>Basic Pay: {salarySlip.basicPay}</p>
          <p>Net Salary: {salarySlip.netSalary}</p>
          <p>PF Deduction: {salarySlip.pfDeduction}</p>
          <p>Professional Tax: {salarySlip.professionalTax}</p>
          {/* Render the SalarySlipPdf component */}
          <SalarySlipPdf salarySlip={salarySlip} />
        </div>
      )}
    </div>
  );
}

export default SalarySlipForm;
