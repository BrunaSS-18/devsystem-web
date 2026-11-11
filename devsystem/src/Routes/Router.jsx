import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Sobre from '../Pages/Sobre'
import Navbar from '../Components/Navbar'

export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
    
        <Routes>
            <Route path="/" element = {<Login/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
        </Routes>
    </BrowserRouter>
  )
}
