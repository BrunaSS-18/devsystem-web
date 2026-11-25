import { useEffect, useState } from "react"
import "../Styles/Pessoas.scss"
import axios from "axios"

export default function Pessoas() {
  const[pessoas, setPessoas] = useState([])
  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    axios.get("http://localhost:3000/pessoas").then((res) => {
        setPessoas(res.data)
    })
  }, [])

  //Configuração da página
  const itensPorPagina = 4

  //Calcula o indice inicial dos registros da página atual
  const inicio = (pagina - 1) * itensPorPagina

  //Calcula o indice final dos registros da pagina atual
  const fim = inicio + itensPorPagina

  //Separa os registros que serão exibidos na página atual
  const pessoasPagina = pessoas.slice(inicio, fim)

  //Calcula a quantidade total de páginas
  const totalPagina = Math.ceil(pessoas.length / itensPorPagina)

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
               {pessoasPagina.map(({id, nome, email, telefone}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{email}</td>
                    <td>{telefone}</td>
                </tr>
               ))}
            </tbody>
        </table>

        <section>
            <button 
                onClick={() => setPagina (pagina - 1)}
                disabled={pagina === 1}>Anterior</button>

            <span>
              {' '}
                {pagina} de {totalPagina} {' '}
            </span>

            <button 
                onClick={() => setPagina (pagina + 1)}
                disabled={pagina === totalPagina}>Próximo</button>
        </section>

    </main>
  )
}
