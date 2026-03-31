import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formerWorker } from "../EmployeeSlice/EmployeeSlice";

function ViewEmployees() {
    const state = useSelector(state => state.empInfo.employee)
    const dispatch = useDispatch()
  

    return (
        <>
            <div>
                <table className="table table-striped table-success">
                    
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Emp Id</th>
                            <th>F Name</th>
                            <th>L Name</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>D.O.J</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            state.map((employee, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{employee.empId}</td>
                                    <td>{employee.fName}</td>
                                    <td>{employee.lName}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.contact}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <dl>
                                            <dd>{employee.address1}</dd>
                                            <dd>{employee.address2}</dd>
                                        </dl>
                                    </td>
                                    <td>{employee.role}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.joinDate}</td>
                                    <td><Link className="btn btn-primary" to={`/update/${index}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={() => { 

                                            dispatch(formerWorker(index)) }}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewEmployees