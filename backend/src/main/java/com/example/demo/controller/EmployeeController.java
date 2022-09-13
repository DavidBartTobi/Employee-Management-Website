package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.EmployeeService;

import java.util.List;
import java.util.Map;

@RestController 
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired // injects employeeService instance
    private EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "Employee registered";
    }

    @GetMapping("/getEmployeeByID/{id}")
    public ResponseEntity<Employee> getEmployeeByID(@PathVariable Integer id) {
        return employeeService.getEmployeeByID(id);
    }

    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employeeDetails) {
        return employeeService.updateEmployee(id, employeeDetails);
    }

    // delete employee rest api
    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id) {
        return employeeService.deleteEmployee(id);
    }

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }
}
