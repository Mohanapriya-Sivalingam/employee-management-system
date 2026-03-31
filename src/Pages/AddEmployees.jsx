import React, { useEffect, useState } from "react";
import '../Pages/AddEmployees.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmp } from "../EmployeeSlice/EmployeeSlice";

function AddEmployees() {
    const state = useSelector(state => state.empInfo.employee)
    const formerState = useSelector(state => state.empInfo.former)

    //Auto Generating Employee Id
    
    const nextId = state.length > 0 ? Math.max(...state.map(emp => emp.empId)) + 1 : 1001
    useEffect(() => {
    const formerId = formerState.find(emp => emp.empid === nextId)

    const allEmpIds = [
        ...state.map(emp => emp.empId),
        ...formerState.map(emp => emp.empId)
    ]
const maxEmpId = allEmpIds.length>0? Math.max(...allEmpIds):1000
const newEmpId = formerId ? formerId.empId+1 : maxEmpId +1
setInputs(prev => ({...prev, empId: newEmpId}))




        // if (nextId !== formerId) {

        //     const newNextId = state.length > 0 ? Math.max(...state.map(emp => emp.empId)) + 1 : 1001
        //     setInputs(prev => ({ ...prev, empId: newNextId }))



        // }
        // else {
        //     const newNextId1 = formerId.empId+1
        //     setInputs(prev => ({ ...prev, empId: newNextId1 }))

        // }

    }, [])

    //      useEffect(()=>{

    // const newNextId = state.length>0? Math.max(...state.map(emp => emp.empId))+1: 1001
    //  setInputs(prev => ({...prev, empId: newNextId}))
    //          },[])



    const navigate = useNavigate()
    const [inputs, setInputs] = useState({ fName: '', lName: '', contact: '', gender: '', email: '', joinDate: '', address1: '', address2: '', role: '', salary: '', empId: nextId })
    const mydispatch = useDispatch()


    function handleSubmit(e) {
        e.preventDefault()
        mydispatch(setEmp(inputs))
        navigate('/view')

    }

    function handleCancel(e) {
        e.preventDefault()
        navigate('/')
    }


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h3>Add Employee details</h3>
                    <label className="form-label">Employee Id</label>
                    <input type="text" className="form-input" value={inputs.empId} onChange={e => setInputs({ ...inputs, empId: e.target.value })} />
                    <div className="input-flex">
                        <div>
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, fName: e.target.value })} />
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, lName: e.target.value })} />
                        </div>
                    </div>
                    <div className="input-flex">
                        <div>
                            <label className="form-label">Contact</label>
                            <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, contact: e.target.value })} />
                        </div>
                        <div>
                            <label className="form-label">Gender</label>
                            <select className="form-input" onChange={e => setInputs({ ...inputs, gender: e.target.value })} >
                                <option value="">--Select--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-flex">
                        <div><label className="form-label">Email</label>
                            <input type="email" className="form-input" onChange={e => setInputs({ ...inputs, email: e.target.value })} /></div>
                        <div><label className="form-label">Date of Join</label>
                            <input type="date" className="form-input" onChange={e => setInputs({ ...inputs, joinDate: e.target.value })} /></div>

                    </div>
                    <label className="form-label">Address</label>
                    <input type="text" placeholder="Address Line 1" className="form-input mb-3" onChange={e => setInputs({ ...inputs, address1: e.target.value })} />
                    <input type="text" placeholder="Address Line 2" className="form-input" onChange={e => setInputs({ ...inputs, address2: e.target.value })} />
                    <label className="form-label">Role</label>
                    <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, role: e.target.value })} />
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, salary: e.target.value })} />
                    {/* <label className="form-label">Employee Id</label>
                    <input type="text" className="form-input" onChange={e => setInputs({ ...inputs, empId: e.target.value })} /> */}

                    <div className="my-btn">
                        <button className="btn btn-success">Add</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default AddEmployees