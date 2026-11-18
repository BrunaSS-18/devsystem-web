import React from 'react'
import "../Styles/Login.scss"
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function loginForm (event) {
    event.preventDefault()

    //Busca a lista de usuários cadastrados na API
    const resposta = await axios.get("http://localhost:3000/users")

    //Procura na lista de usuários, aquele que possui o email e senha
    const usuario = resposta.data.find((user) => {
      return user.email === email && user.senha === senha
    })

    if (usuario) {
      //alert("Login realizado com sucesso")
      toast.success("Login realizado com sucesso!")
      sessionStorage.setItem("logado", "true")
      window.location.href = "/homeLogado"
    } else {
      //alert("Usuário ou senha incorreto!")
      toast.error("Usuário ou senha incorreto!")
    }
  } 

  return (
    <main className='container login'>
      <section className='login-card'>
        <h1>Login</h1>
        
        <form onSubmit={loginForm}>
          <article className='form-control'>
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id='email' 
              placeholder='Digite seu Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </article>

          <article className='form-control'>
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id='senha' 
              placeholder='Digite sua Senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </article>

          <button className="button-primary" type='submit'>Entrar</button>
          <ToastContainer/>
        </form>

      </section>
    </main>
  )
}
