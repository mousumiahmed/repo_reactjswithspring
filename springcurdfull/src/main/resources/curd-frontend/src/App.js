import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployee from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <div className="container">
        <Switch>
          <Route path="/" exact component={ListEmployee}></Route>
          <Route path="/employees" component={ListEmployee}></Route>
          <Route path="/addemployee" component={CreateEmployee}></Route>
          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
        </Switch>
        </div>
      </Router>
      
      
      <Footer/>
    </div>
  );
}

export default App;
