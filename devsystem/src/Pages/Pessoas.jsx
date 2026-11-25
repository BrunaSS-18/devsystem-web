import { useEffect, useState } from "react"
import "../Styles/Pessoas.scss"
import axios from "axios"

export default function Pessoas() {
  const[pessoas, setPessoas] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/pessoas").then((res) => {
        setPessoas(res.data)
    })
  }, [])

  useEffect(() => {
    console.log(pessoas)
  }, [pessoas])

  return (
    <main className="container pessoas">
        <h1>Lista de Pessoas</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
               {pessoas.map((pessoa) => (
                <tr>
                    <td>{pessoa.id}</td>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.email}</td>
                    <td>{pessoa.telefone}</td>
                </tr>
               ))}
            </tbody>
        </table>
    </main>
  )
}
