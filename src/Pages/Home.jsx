import React, { useState } from "react";
import '../Pages/Home.css'
import { useSelector } from "react-redux";


function Home() {

    //Active Employee 
    const state = useSelector(state => state.empInfo.employee)
    const [employeeId, setEmployeeId] = useState("")
    const [foundId, setFoundId] = useState(null)
    const [searchedId, setSearchedId] = useState("")
    const [searchAttempted, setSearchAttempted] = useState(false);

    //Former Employee
    const states = useSelector(state => state.empInfo.former)
        const [formerEmployeeId, setFormerEmployeeId] = useState("")
        const [formerFoundId, setFormerFoundId] = useState(null)
        const [formerSearchedId, setFormerSearchedId] = useState("")
        const [formerSearchAttempted, setFormerSearchAttempted] = useState(false);
// Search Active Employee Id
    function handleFind() { 

        const emp = state.find(id => id.empId === Number(employeeId))
        setSearchedId(employeeId)
        setFoundId(emp || null)
        setEmployeeId("")
       setSearchAttempted(true)
    }

    //Search Former Employee Id
    function handleFormerFind() {

        const emp = states.find(id => id.empId === Number(formerEmployeeId))
        setFormerSearchedId(formerEmployeeId)
        setFormerFoundId(emp || null)
        setFormerEmployeeId("")
       setFormerSearchAttempted(true)
    }

    //Search Clear
    function handleClear() {
    setEmployeeId("")
    setFormerEmployeeId("")
    setFoundId(null)
    setFormerFoundId(null)
    setSearchAttempted(false)
    setFormerSearchAttempted(false)
}
    
    return (
        <>
        
        
       
            
             <div className="home-container">
                
 
 <div className="img-container">
 {/* <img src="" alt="" /> */}
 </div>
        
            <div className="content-container h-100">
                <p>Employee Management System</p>
                <div className="container-fluid search">
{/* Active Employee Input */}
                <label className="form-label mb-3 ms-5" >Active Employee Id : </label>
                <div className="input-group ">

                <input className="form-control w-25" type="text" value={employeeId} onChange={e => setEmployeeId(e.target.value)} />
                <button className="btn btn-primary w-25" onClick={handleFind}>Search</button> 
                </div>

                {/* Former Employee Input */}
                
                
                    <label className="form-label">Former Employee</label>               
<div className="input-group">

                <input className="form-control w-25" type="text" value={formerEmployeeId} onChange={e => setFormerEmployeeId(e.target.value)} />
                <button className="btn btn-primary w-25" onClick={handleFormerFind}>Search</button>
</div>
                </div>
                
                
                {/* Active Employee Listing  */}

                {
                    foundId ? (<ul className="list-item">
                        <li><strong>Employee Id :</strong>  {foundId.empId} </li>
                        <li> <strong>First Name :</strong> {foundId.fName}</li>
                        <li> <strong>Last Name :</strong> {foundId.lName}</li>
                        <li> <strong>Gender :</strong> {foundId.gender}</li>
                        <li><strong>Email :</strong> {foundId.email}</li>
                        <li> <strong >Contact:</strong> {foundId.contact}</li>
                        <li><strong>Address :</strong> {foundId.address1}, {foundId.address2}</li>
                        <li><strong>Role :</strong>  {foundId.role}</li>
                        <li><strong>Date of Joining :</strong> {foundId.joinDate}</li>

                    </ul>) : (searchAttempted && !employeeId && <p className="error">No Employee Found with Id "{searchedId}"</p>)
                }
{/* Former Employee Listing */}
{
                    formerFoundId ? (<ul className="list-item">
                        <li><strong>Employee Id :</strong>  {formerFoundId.empId} </li>
                        <li> <strong>First Name :</strong> {formerFoundId.fName}</li>
                        <li> <strong>Last Name :</strong> {formerFoundId.lName}</li>
                        <li> <strong>Gender :</strong> {formerFoundId.gender}</li>
                        <li><strong>Email :</strong> {formerFoundId.email}</li>
                        <li> <strong >Contact:</strong> {formerFoundId.contact}</li>
                        <li><strong>Address :</strong> {formerFoundId.address1}, {formerFoundId.address2}</li>
                        <li><strong>Role :</strong>  {formerFoundId.role}</li>
                        <li><strong>Date of Joining :</strong> {formerFoundId.joinDate}</li>
                        <li><strong>Releved Date : </strong></li>

                    </ul>) : (formerSearchAttempted && !formerEmployeeId && <p className="error">No Former Employee Found with Id "{formerSearchedId}"</p>)
                }
<button className="btn btn-warning w-50 mt-0 shadow-lg hover mb-5" onClick={handleClear}>Clear</button>
            </div>

        </div>
           
        </>
    )
}

export default Home