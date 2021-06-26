import { useState } from "react"
import axios from 'axios';

export default function Empenho() {
  
  const [empenho, setEmpenho] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();


  async function handleSubmit(event)  {
    event.preventDefault();

    await axios.post('http://localhost:3333/empenhos', {
      empenho,
      email,
      date
    })
  }
  
  return (
    <main>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Empenho" onChange={(e) => setEmpenho(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="date" onChange={(e) => setDate(e.target.value)}/>

        <button type="submit">Inserir</button>
      </form>

    </main>
  )
}
