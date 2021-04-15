import Axios from 'axios';
import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class CreateEmployee extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            emailId:""
        }
    }
    componentDidMount(){
        
    }
    changeName=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId}
        EmployeeServices.createEmployee(employee).then(res=>{
            this.props.history.push("/employees")
        })
    }
    cancel(){
        this.props.history.push("/employees")
    }
    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Employee Form</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name :</label>
                                    <input placeholder="firstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeName}>

                                    </input>
                                    <label>Last Name :</label>
                                    <input placeholder="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeName}>

                                    </input>
                                    <label>First Name :</label>
                                    <input placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeName}>

                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={this.saveEmployee}>save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>cancel</button>
                            </form>
                        </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateEmployee;