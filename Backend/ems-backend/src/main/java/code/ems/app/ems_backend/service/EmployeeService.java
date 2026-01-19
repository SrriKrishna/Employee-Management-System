package code.ems.app.ems_backend.service;

import code.ems.app.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService{

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeDtoById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);


}
