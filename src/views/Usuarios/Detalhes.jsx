import React, { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`${API_BASE_URL}users/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar o usuário');
        }
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [userId]);

  if (!user) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Data de Nascimento: {user.dateOfBirth}</p>
      <p>Gênero: {user.gender}</p>
      <p>Localização: {user.location}</p>
      <p>Preferências: {user.preferences}</p>
      <p>Biografia: {user.biography}</p>
      <p>Interesses: {user.interests}</p>
      <img src={user.photos} alt={`${user.name}`} />
    </div>
  );
};

export default Detalhes;