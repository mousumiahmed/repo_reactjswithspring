package com.example.demo.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.example.model.Employee;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
