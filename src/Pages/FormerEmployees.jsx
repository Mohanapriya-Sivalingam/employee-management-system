import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../Pages/FormerEmployees.css'

function FormerEmployees(){

    const state = useSelector(state => state.empInfo.former)
   
    
    
    const [date, setDate]=useState('')
    

    useEffect(()=>{
        const today = new Date()
        const year=today.getFullYear()
        const month=today.getMonth()+1 
        const day=today.getDate()
        const currentDate = `${year}-${month}-${day}`
        setDate(currentDate)
        
    },[])
    
    return(
        <>
       
        <div>

            <table className="table table-striped table-danger">
                
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Emp.Id</th>
                        <th>F Name</th>
                        <th>L Name</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>D.O.J</th>
                        <th>Releved Date</th>
                       </tr>
                </thead>
                <tbody>
                    {

                        state.map((employee, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
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
                                <td>{date}</td>
                               
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default FormerEmployees