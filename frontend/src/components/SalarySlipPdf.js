import React from 'react';
import { Document, Page, Text, PDFDownloadLink } from '@react-pdf/renderer';

function SalarySlipPdf({ salarySlip }) {
  const MyDocument = function() {
    return React.createElement(
      Document,
      null,
      React.createElement(
        Page,
        { size: "A4" },
        React.createElement(Text, null, `Name: ${salarySlip.employee.name}`),
        React.createElement(Text, null, `Email: ${salarySlip.employee.email}`),
        React.createElement(Text, null, `Net Salary: ${salarySlip.netSalary}`),
        React.createElement(Text, null, `PF Deduction: ${salarySlip.pfDeduction}`),
        React.createElement(Text, null, `Professional Tax: ${salarySlip.professionalTax}`)
      )
    );
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      PDFDownloadLink,
      { document: React.createElement(MyDocument), fileName: "salarySlip.pdf" },
      function({ loading }) {
        return loading ? 'Generating PDF...' : 'Download Salary Slip PDF';
      }
    )
  );
}

export default SalarySlipPdf;
