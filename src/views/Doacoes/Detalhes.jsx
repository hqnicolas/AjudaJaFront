import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}donation/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar a doação');
        }
        return res.json();
      })
      .then(data => setDonation(data))
      .catch(err => console.error(err));
  }, [id]);

  console.log('id recebido:', id);

  if (!donation) return <div>Carregando...</div>;
  const formatarData = (data) => {
    if (typeof data === 'string' && data.includes('/')) {
      const [day, month, year] = data.split('/');
      return new Date(year, month - 1, day).toLocaleDateString('pt-BR');
    }
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div>
      <h1>Detalhes da Doação</h1>
      <p><strong>Tipo de Doação:</strong> {donation.type}</p>
      <p><strong>Doador:</strong> {donation.donor}</p>
      <p><strong>Data de Recebimento:</strong> {formatarData(donation.receiverDate)}</p>
      <p><strong>Data de Expiração:</strong> {formatarData(donation.expiryDate)}</p>
      {donation.details && (
        <p><strong>Detalhes:</strong> {donation.details}</p>
      )}
      {donation.report && (
        <div>
          <h3>Relatório da Doação:</h3>
          <a href={donation.report} target="_blank" rel="noopener noreferrer">Baixar Relatório CSV</a>
        </div>
      )}
    </div>
  );
};

export default Detalhes;