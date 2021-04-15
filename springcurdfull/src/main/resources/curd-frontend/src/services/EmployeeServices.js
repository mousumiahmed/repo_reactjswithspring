import React, { Component } from 'react';
import axios from 'axios';

const geturl="http://localhost:8080/api/v1/employees";

class EmployeeServices extends Component {
    getEmployee(){
        return axios.get(geturl)
    }
    createEmployee(employee){
        return axios.post(geturl,employee)
    }
    getEmployeeById(employeeId){
        return axios.get(geturl + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(geturl + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(geturl + '/' + employeeId);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default new EmployeeServices();