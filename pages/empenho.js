import { useEffect, useState } from "react"
import { api } from '../config/api';


export default function Empenho() {

  const [empenho, setEmpenho] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    notificationSuppliers();
  }, []);

  setInterval(() => {
    notificationSuppliers();
  }, 50000);

  async function notificationSuppliers() {
    await api.get('empenhos/notification');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post('empenhos', {
      empenho,
      email,
      date
    })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>Nota de Empenho</strong>
          <input type="text" placeholder="Ex: 2021NE000111" onChange={(e) => setEmpenho(e.target.value)} />
        </div>

        <div>
          <strong>Email do fornecedor</strong>
          <input type="text" placeholder="Ex: pandasuprir@gmail.com" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <strong>Data de envio da NE ao fornecedor</strong>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>

        <button type="submit">Inserir</button>
      </form>
    </main>
  )
}
