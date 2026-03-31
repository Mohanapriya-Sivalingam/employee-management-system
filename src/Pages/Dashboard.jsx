import React from "react";
import { useSelector } from "react-redux";
import '../Pages/Dashboard.css'
import img from '../assets/4903445.jpg'

function Dashboard() {

    const activeEmployee = useSelector(state => state.empInfo.employee)
    const formerEmployee = useSelector(state => state.empInfo.former)
    return (
        <>
            <div className="home-container">



                <div className="image-container">

                </div>

                <div className="content-container">
                    <h1>Dashboard</h1>
                    <h6>“Your team is your greatest strength — manage it with care”</h6>

                    <p className="active-para">Active Employes - <span className="active">{activeEmployee.length}</span></p>
                    <p className="former-para">Former Employes - <span className="former">{formerEmployee.length}</span> </p>
                </div>

            </div>





        </>
    )
}
export default Dashboard