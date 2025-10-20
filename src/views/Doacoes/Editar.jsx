import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DonationForm = ({ donation, onChange }) => {
  return (
    <form>
      <label>
        Nome da Doação:
        <input type="text" name="name" value={donation.name || ''} onChange={onChange} />
      </label>
      <label>
        Tipo:
        <input type="text" name="type" value={donation.type || ''} onChange={onChange} />
      </label>
      <label>
        Quantidade:
        <input type="number" name="quantity" value={donation.quantity || ''} onChange={onChange} />
      </label>
      <label>
        Donor (Doador):
        <input type="text" name="donor" value={donation.donor || ''} onChange={onChange} />
      </label>
      <label>
        Data de Expiração:
        <input type="date" name="expiryDate" value={donation.expiryDate || ''} onChange={onChange} />
      </label>
      <label>
        Período de Validade:
        <input type="number" name="validityPeriod" value={donation.validityPeriod || ''} onChange={onChange} />
      </label>
      <label>
        Data de Recebimento:
        <input type="date" name="receiverDate" value={donation.receiverDate || ''} onChange={onChange} />
      </label>
    </form>
  );
};

const Editar = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const url = `${API_BASE_URL}donation/${id}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar doação');
        return res.json();
      })
      .then(data => {
        setDonation(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation),
    })
      .then(res => {
        if (!res.ok) throw new Error('Falha ao atualizar doação');
        return res.json();
      })
      .then(data => {
        setDonation(data);
        setMessage('Doação atualizada com sucesso!');
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    if (!window.confirm('Tem certeza que deseja excluir esta doação?')) return;
    setLoading(true);
    fetch(url, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setMessage('Doação excluída com sucesso!');
          setDonation({});
        } else if (res.status === 404) {
          setError('Doação não encontrada');
        } else {
          throw new Error('Falha ao excluir doação');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Editar Doação</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {!loading && donation && Object.keys(donation).length > 0 && (
        <>
          <DonationForm donation={donation} onChange={handleChange} />
          <Button typeButton="primary" onClick={handleSubmit}>Salvar</Button>
          <Button 
            typeButton="danger" 
            onClick={handleDelete} 
            style={{ marginLeft: 10 }}
          >
            Excluir
          </Button>
        </>
      )}
    </div>
  );
};

export default Editar;