import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Usuario = ({ user }) => (
  <div style={{ /* styling */ }}>
    <img src={user.photos} alt={user.name} style={{ width: 80, height: 80, borderRadius: "50%" }} />
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Localização: {user.location}</p>
    <p>Interesses: {user.interests}</p>
    <Link to={`/usuarios/${user.id}`}>Detalhes</Link>
    <br />
    <Link to={`/usuarios/${user.id}/editar`}>Editar</Link>
  </div>
);

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
    <div>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        usuarios.map((user) => <Usuario key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Listar;