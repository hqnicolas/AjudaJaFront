import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Doacao = ({ doacao }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ajude-ja/doacoes/detalhes/${doacao.id}`);
  };

  const handleEdit = () => {
    navigate(`/ajude-ja/doacoes/editar/${doacao.id}`);
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 16,
      margin: 8,
      width: 250,
      textAlign: 'center'
    }}>
      <h3>{doacao.name}</h3>
      <p>Tipo: {doacao.type}</p>
      <p>Quantidade: {doacao.quantity}</p>
      <p>Doador: {doacao.donor}</p>
      <p>Data de Recebimento: {doacao.receiverDate}</p>
      <p>Data de Expiração: {doacao.expiryDate}</p>

      <div>
        {/* Botões de Editar e Ver Detalhes */}
        <Link to={`/ajude-ja/doacoes/editar/${doacao.id}`}>
          <Button typeButton="secondary">Editar</Button>
        </Link>
        <Link to={`/ajude-ja/doacoes/detalhes/${doacao.id}`}>
          <Button typeButton="primary">Ver Detalhes</Button>
        </Link>
      </div>
    </div>
  );
};

const Listar = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}donation`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar doações");
        return res.json();
      })
      .then((data) => {
        setDoacoes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando doações...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Doações</h2>
      <div style={{ marginBottom: 20 }}>
        <Link to="/ajude-ja/doacoes/novo">
          <Button typeButton="primary">+ Criar Nova Doação</Button>
        </Link>
      </div>
      {doacoes.length === 0 ? (
        <p>Nenhuma doação encontrada.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {doacoes.map((doacao) => (
            <Doacao key={doacao.id} doacao={doacao} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listar;