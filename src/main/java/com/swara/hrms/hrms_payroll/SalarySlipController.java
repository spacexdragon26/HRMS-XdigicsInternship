package com.swara.hrms.hrms_payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/salary-slips")
public class SalarySlipController {
    @Autowired
    private SalarySlipService salarySlipService;

    @Autowired
    private SalarySlipRepository salarySlipRepository;  // Injecting the repository here

    @PostMapping("/{employeeId}")
    public SalarySlip generateSalarySlip(@PathVariable Long employeeId) {
        return salarySlipService.generateSalarySlip(employeeId);
    }

    @GetMapping("/{id}")
    public SalarySlip getSalarySlipById(@PathVariable Long id) {
        return salarySlipService.getSalarySlipById(id);
    }
}

