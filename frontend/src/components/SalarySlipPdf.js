import React from 'react';
import { Document, Page, Text, PDFDownloadLink } from '@react-pdf/renderer';

function MyDocument({ salarySlip }) {
  return (
    <Document>
      <Page size="A4">
        <Text>Name: {salarySlip.employee.name}</Text>
        <Text>Email: {salarySlip.employee.email}</Text>
        <Text>Net Salary: {salarySlip.netSalary}</Text>
        <Text>PF Deduction: {salarySlip.pfDeduction}</Text>
        <Text>Professional Tax: {salarySlip.professionalTax}</Text>
      </Page>
    </Document>
  );
}

function SalarySlipPdf({ salarySlip }) {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDocument salarySlip={salarySlip} />}
        fileName={`SalarySlip_${salarySlip.employee.id}.pdf`}
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download Salary Slip PDF')}
      </PDFDownloadLink>
    </div>
  );
}

export default SalarySlipPdf;
