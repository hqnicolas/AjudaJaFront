import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Usuario = ({ user }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/ajude-ja/usuarios/detalhes/${user.id}`);
  };

  const handleEdit = () => {
    navigate(`/ajude-ja/usuarios/editar/${user.id}`);
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
      <img src={user.photos} alt={user.name} style={{ width: 80, height: 80, borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Localização: {user.location}</p>
      <p>Interesses: {user.interests}</p>
      <Button typeButton="primary" onClick={handleViewDetails}>Ver Detalhes</Button>
      <br />
      <Button typeButton="secondary" onClick={handleEdit}>Editar</Button>
    </div>
  );
};

const Listar = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}users`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuários");
        return res.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Usuários</h2>
      <div style={{ marginBottom: 20 }}>
        <Link to="/ajude-ja/usuarios/novo">
          <Button typeButton="primary">+ Criar Novo Usuário</Button>
        </Link>
      </div>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {usuarios.map((user) => (
            <Usuario key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listar;