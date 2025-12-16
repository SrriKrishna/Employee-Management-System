import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponents from './Component/ListEmployeeComponents'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element ={<ListEmployeeComponents />}></Route>

        {/* // http://localhost:3000/employees */}
        <Route path='/employees' element = {<ListEmployeeComponents />}></Route>

        {/* //http://localhost:3000/add-employee */}
        <Route path='/add-employee' element = {<EmployeeComponent />}></Route>

        {/* //http://localhost:3000/update-employee/1 */}
        <Route path='/update-employee/:id' element = {<EmployeeComponent />}></Route>

        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
