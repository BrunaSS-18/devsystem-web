import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Login'
import Sobre from '../Pages/Sobre'
import Navbar from '../Components/Navbar'
import HomeLogado from '../Pages/HomeLogado'
import Pessoas from '../Pages/Pessoas'

export default function Router() {

  const logado = sessionStorage.getItem("logado")

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route 
              path="/" 
              element = {
                logado === "true"
                ? <Navigate to = "/homeLogado" />
                : <Login />
              }
              />
            <Route path="/sobre" element = {<Sobre/>}/>
            <Route 
              path="/homeLogado" 
              element = {
                logado === "true"
                ? <HomeLogado/>
                : <Navigation to="/" />
              }
            />

            <Route 
              path='/pessoas' 
              element = {
                sessionStorage.getItem("logado") === "true"
                  ? <Pessoas/>
                  : <Navigate to="/" replace/>
              }
            />

            {/* Redireciona rotas inexistentes para a página inicial */}
            <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  )
}
