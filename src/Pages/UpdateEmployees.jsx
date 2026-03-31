import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateEmp } from '../EmployeeSlice/EmployeeSlice'

function UpdateEmployees() {

  const navigate =useNavigate()
    const [inputs, setInputs]= useState({fName:'', lName:'',contact:'', gender:'', email:'', joinDate:'',address1:'', address2:'', role:'', empId:''})
    const mydispatch= useDispatch()
    const {index} = useParams()
  
    const state = useSelector(state=> state.empInfo.employee)


    useEffect(()=>{
      const employee = state[index]
      employee && setInputs(employee)
    },[])

    function handleSubmit(e){
      e.preventDefault()
      const confirmed = window.confirm("Are you sure you want to update this employee's details?");
      if(confirmed){ mydispatch(updateEmp({employee:inputs, index:index}))
      navigate('/view')}
    else {alert("update canceled")
      navigate('/view')
    } 
     
    }

    function handleCancel(e){
      e.preventDefault()
      navigate('/view')
    }

  return (
    <>
     <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h3>Update Employee details</h3>
                <label htmlFor="" className="form-label">Employee Id</label>
                    <input type="text" className="form-input" value={inputs.empId} onChange={e=>setInputs({...inputs, empId:e.target.value})}/>
                <div className="input-flex">
                    <div>
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-input" value={inputs.fName} onChange={e=>setInputs({...inputs, fName:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="text" className="form-input" value={inputs.lName} onChange={e=>setInputs({...inputs, lName:e.target.value})} />
                    </div>
                </div>
                <div className="input-flex">
                    <div>
                        <label htmlFor="" className="form-label">Contact</label>
                        <input type="text" className="form-input" value={inputs.contact}  onChange={e=>setInputs({...inputs, contact:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="" className="form-label">Gender</label>
                        <select name="gender" id="" className="form-input" value={inputs.gender} onChange={e=>setInputs({...inputs, gender:e.target.value})}>
                            <option value="">--Select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
               <div className="input-flex">
                <div><label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-input" value={inputs.email} onChange={e=>setInputs({...inputs, email:e.target.value})}/></div>
                    <div>
                      <label className="form-label">Date of Join</label>
                    <input type="date" className="form-input"  value={inputs.joinDate} onChange={e=>setInputs({...inputs, joinDate:e.target.value})}/>
                    </div>
                    
</div>
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" placeholder="Address Line 1" className="form-input mb-3" value={inputs.address1} onChange={e=>setInputs({...inputs, address1:e.target.value})}/>
                    <input type="text" placeholder="Address Line 2" className="form-input" value={inputs.address2} onChange={e=>setInputs({...inputs, address2:e.target.value})} />
                    <label htmlFor="" className="form-label">Role</label>
                    <input type="text" className="form-input" value={inputs.role} onChange={e=>setInputs({...inputs, role:e.target.value})}/>
                    <label className='form-label'>Salary</label>
                    <input type="text" className='form-input' value={inputs.salary} onChange={e=> setInputs({...inputs, salary:e.target.value})} />
                    
                    
                <div className="my-btn">
                    <button className="btn btn-info" type='submit'>Update</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>

            </form>
        </div>
    </>
  )
}

export default UpdateEmployees
