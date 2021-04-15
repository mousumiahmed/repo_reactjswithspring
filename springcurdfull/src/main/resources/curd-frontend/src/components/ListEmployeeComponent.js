import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]

        }
    }
    componentDidMount(){
        EmployeeServices.getEmployee().then((res)=>{
            this.setState({
                employees:res.data
            })
        })
    }
    addEmployee=()=>{
        this.props.history.push("/addemployee");
        

    }
    deleteEmployee=(id)=>{
        EmployeeServices.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee=(id)=>{
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee=(id)=>{
        this.props.history.push(`/update-employee/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="test-center">
                    Employee List
                </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>
                        Add Employee
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee first Name</th>
                                <th>Employee last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee)=>{
                                return(
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;