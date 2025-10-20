import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}users/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar o usuário');
        }
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  console.log('id recebido:', id);
  if (!user) return <div>Carregando...</div>;

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Data de Nascimento:</strong> {formatarData(user.dateOfBirth)}</p>
      <p><strong>Gênero:</strong> {user.gender}</p>
      <p><strong>Localização:</strong> {user.location}</p>
      <p><strong>Preferências:</strong> {user.preferences}</p>
      <p><strong>Biografia:</strong> {user.biography}</p>
      <p><strong>Interesses:</strong> {user.interests}</p>
      {user.photos && (
        <img
          src={user.photos}
          alt={`Foto de ${user.name}`}
          style={{ maxWidth: '300px', borderRadius: '8px' }}
        />
      )}
    </div>
  );
};

export default Detalhes;