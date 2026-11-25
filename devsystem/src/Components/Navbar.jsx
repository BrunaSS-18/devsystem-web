import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.scss"

export default function Navbar() {
 const logado = sessionStorage.getItem("logado")

 function sair(){
    //Remove autenticação
    sessionStorage.removeItem("logado")

    //Redireciona para o Login
    window.location.replace("/")
 }

 return (
    <nav>
        <section className='container'>
            {/*<Link to="/">Login</Link>*/}
            {logado !== "true" && (
                <>
                    <Link to = "/">Login</Link>
                </>
            )}
            <Link to="/sobre">Sobre</Link>

            {logado === "true" && (
                <>
                    <button className='btn-sair' onClick={sair}>
                      Sair
                    </button>
                </>
            )}
        </section>
    </nav>
  )
}
