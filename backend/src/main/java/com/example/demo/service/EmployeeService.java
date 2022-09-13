package com.example.demo.service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired // inject an instance of employeeRepository
    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public ResponseEntity<Employee> getEmployeeByID(Integer id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException(id.toString(), null, "Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }

    public ResponseEntity<Employee> updateEmployee(Integer id, Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException(id.toString(), null, "Employee not exist with id :" + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());

        return ResponseEntity.ok(saveEmployee(employee));
    }

    public ResponseEntity<Map<String, Boolean>> deleteEmployee(Integer id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException(id.toString(), null, "Employee not exist with id :" + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
