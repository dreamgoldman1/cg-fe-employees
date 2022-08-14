import React from "react";

const EmployeesList = ({ employees, employeeList }) => {
  let renderList = '';
  if (employeeList){
    renderList = employees.map((employee, key) => {
      return (
        <tr key={key}>
          <td>{employee.id}</td>
          <td>{employee.employee_name}</td>
          <td>{employee.employee_salary}</td>
          <td>{employee.annual_salary}</td>
          <td>{employee.employee_age}</td>
        </tr>
      )
    });
  }else{
    renderList = <tr>
      <td>{employees.id}</td>
      <td>{employees.employee_name}</td>
      <td>{employees.employee_salary}</td>
      <td>{employees.annual_salary}</td>
      <td>{employees.employee_age}</td>
    </tr>; 
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Annual Salary</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {renderList}
      </tbody>
    </table>
  )
}

export default EmployeesList