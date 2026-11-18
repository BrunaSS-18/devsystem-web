import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Sobre from '../Pages/Sobre'
import Navbar from '../Components/Navbar'
import HomeLogado from '../Pages/HomeLogado'

export default function Router() {

  const logado = sessionStorage.getItem("logado")

  return (
    <BrowserRouter>
    <Navbar/>

    
        <Routes>
            <Route path="/" element = {<Login/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
            <Route 
              path="/homeLogado" 
              element = {
                logado === "true"
                ? <HomeLogado/>
                : <Navigation to="/" />
              }
            />
        </Routes>
    </BrowserRouter>
  )
}
