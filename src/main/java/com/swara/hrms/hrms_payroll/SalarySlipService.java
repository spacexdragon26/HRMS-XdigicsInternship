package com.swara.hrms.hrms_payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalarySlipService {
    @Autowired
    private SalarySlipRepository salarySlipRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public SalarySlip generateSalarySlip(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        double pfDeduction = 0.12 * employee.getBasicSalary();
        double professionalTax = 200;
        double netSalary = employee.getBasicSalary() - (pfDeduction + professionalTax);

        SalarySlip salarySlip = new SalarySlip();
        salarySlip.setEmployee(employee);
        salarySlip.setPfDeduction(pfDeduction);
        salarySlip.setProfessionalTax(professionalTax);
        salarySlip.setNetSalary(netSalary);

        return salarySlipRepository.save(salarySlip);
    }

    // Method to get a salary slip by ID
    public SalarySlip getSalarySlipById(Long id) {
        return salarySlipRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Salary Slip not found with id: " + id));
    }
}

