
import { useState } from 'react';

function App() {
  const [processos, setProcessos] = useState([]);
  const [form, setForm] = useState({
    numero: '', tipo: '', parte: '', comarca: '', objeto: '',
    valor: '', risco: '', fase: '', status: '', responsavel: '', prazo: '', observacoes: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProcessos([...processos, form]);
    setForm({
      numero: '', tipo: '', parte: '', comarca: '', objeto: '',
      valor: '', risco: '', fase: '', status: '', responsavel: '', prazo: '', observacoes: ''
    });
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Processos</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '600px' }}>
        <input name="numero" value={form.numero} onChange={handleChange} placeholder="Nº do Processo" />
        <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo" />
        <input name="parte" value={form.parte} onChange={handleChange} placeholder="Parte Contrária" />
        <input name="comarca" value={form.comarca} onChange={handleChange} placeholder="Comarca / Vara" />
        <input name="objeto" value={form.objeto} onChange={handleChange} placeholder="Objeto" />
        <input name="valor" value={form.valor} onChange={handleChange} placeholder="Valor da Causa" />
        <select name="risco" value={form.risco} onChange={handleChange}>
          <option value="">Risco</option>
          <option value="Remoto">Remoto</option>
          <option value="Possível">Possível</option>
          <option value="Provável">Provável</option>
        </select>
        <input name="fase" value={form.fase} onChange={handleChange} placeholder="Fase Atual" />
        <input name="status" value={form.status} onChange={handleChange} placeholder="Status" />
        <input name="responsavel" value={form.responsavel} onChange={handleChange} placeholder="Responsável" />
        <input type="date" name="prazo" value={form.prazo} onChange={handleChange} />
        <textarea name="observacoes" value={form.observacoes} onChange={handleChange} placeholder="Observações" />
        <button type="submit">Adicionar Processo</button>
      </form>

      <h2>Lista de Processos</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nº</th><th>Tipo</th><th>Parte</th><th>Comarca</th>
            <th>Valor</th><th>Risco</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {processos.map((p, i) => (
            <tr key={i}>
              <td>{p.numero}</td><td>{p.tipo}</td><td>{p.parte}</td>
              <td>{p.comarca}</td><td>{p.valor}</td><td>{p.risco}</td><td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
