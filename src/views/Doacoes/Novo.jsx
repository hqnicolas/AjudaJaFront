import { useState } from 'react';
import Button from '../../components/Button/Button'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Novo = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: '',
    donor: '',
    receiverDate: '',
    validityPeriod: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}donation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.mensagem || 'Doação criada com sucesso!');
        setFormData({
          name: '',
          type: '',
          quantity: '',
          donor: '',
          receiverDate: '',
          validityPeriod: '',
        });
      } else {
        console.error('Deu Pobrema:', data);
        setMessage(data.mensagem || 'Erro ao criar doação');
      }
    } catch (error) {
      console.error('Vacilou no fetch:', error);
      setMessage('Erro na comunicação com o servidor.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Reportar uma Nova Doação</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Doação:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Tipo:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Material">Material</option>
            <option value="Financeiro">Financeiro</option>
          </select>
        </label>
        <br />

        <label>
          Quantidade:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Doador:
          <input
            type="text"
            name="donor"
            value={formData.donor}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Data de Recebimento:
          <input
            type="date"
            name="receiverDate"
            value={formData.receiverDate}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Período de Validade (em dias):
          <input
            type="number"
            name="validityPeriod"
            value={formData.validityPeriod}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <Button typeButton="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Criando...' : 'Criar Doação'}
        </Button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Novo;