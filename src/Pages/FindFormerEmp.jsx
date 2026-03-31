import React, { useState } from "react";
import '../Pages/Home.css'
import { useSelector } from "react-redux";
import img from '../assets/18771.jpg';


function FindFormerEmp() {

    const state = useSelector(state => state.empInfo.former)
    const [formerEmployeeId, setFormerEmployeeId] = useState("")
    const [formerFoundId, setFormerFoundId] = useState(null)
    const [formerSearchedId, setFormerSearchedId] = useState("")
    const [formerSearchAttempted, setFormerSearchAttempted] = useState(false);

    function handleFormerFind() {

        const emp = state.find(id => id.empId === employeeId)
        setFormerSearchedId(employeeId)
        setFormerFoundId(emp || null)
        setFormerEmployeeId("")
       setFormerSearchAttempted(true)
    }
    return (
        <>
        
        
       
            
             <div className="home-container">
                
 
 <div className="img-container">
 <img src="" alt="" />
 </div>
        
            <div className="content-container">
                <p>Employee Management System</p>
                <label >Former Employee</label>
                <input type="text" value={formerEmployeeId} onChange={e => setFormerEmployeeId(e.target.value)} />
                <button className="btn btn-primary" onClick={handleFormerFind}>Find</button>

                {
                    formerFoundId ? (<ul className="list-item">
                        <li><strong>Employee Id :</strong>  {formerFoundId.empId} </li>
                        <li> <strong>First Name :</strong> {formerFoundId.fName}</li>
                        <li> <strong>Last Name :</strong> {formerFoundId.lName}</li>
                        <li> <strong>Gender :</strong> {formerFoundId.gender}</li>
                        <li><strong>Email :</strong> {foundId.email}</li>
                        <li> <strong >Contact:</strong> {formerFoundId.contact}</li>
                        <li><strong>Address :</strong> {formerFoundId.address1}, {formerFoundId.address2}</li>
                        <li><strong>Role :</strong>  {formerFoundId.role}</li>
                        <li><strong>Date of Joining :</strong> {formerFoundId.joinDate}</li>

                    </ul>) : (formerSearchAttempted && !formerEmployeeId && <p className="error">No Employee Found with Id "{formerSearchedId}"</p>)
                }


            </div>

        </div>
           
        </>
    )
}

export default FindFormerEmp