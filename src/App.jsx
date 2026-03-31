import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Dashboard from './Pages/Dashboard'
import AddEmployees from './Pages/AddEmployees'
import ViewEmployees from './Pages/ViewEmployees'
import FormerEmployees from './Pages/FormerEmployees'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home'
import UpdateEmployees from './Pages/UpdateEmployees'
import FindFormerEmp from './Pages/FindFormerEmp'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/add' element={<AddEmployees/>} />
      <Route path='/view' element={<ViewEmployees/>} />
      <Route path='/former' element={<FormerEmployees/>} />
      <Route path='/update/:index' element={<UpdateEmployees/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
