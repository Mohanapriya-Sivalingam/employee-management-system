import React from "react"   
import '../Pages/NavBar.css'
import { Link } from "react-router-dom"


function NavBar(){

    return(
        <>
        <nav className="navbar nav bg-primary shadow-lg mt-2 mx-auto">
            <ul className="mx-auto g-3 text-center">


            <li className="nav-item"> <Link to='/' className="nav-link"> Home</Link></li>
            <li className="nav-item"><Link to='/dashboard' className="nav-link">Dashboard</Link></li>
            <li className="nav-item"><Link to='/add' className="nav-link">Add Employee</Link></li>
            <li className="nav-item"><Link to='/view' className="nav-link">View List</Link></li>
            <li className="nav-item"><Link to='/former' className="nav-link">Former Employees</Link></li>
            </ul>
            
        </nav>
        
        </>
    )
}

export default NavBar