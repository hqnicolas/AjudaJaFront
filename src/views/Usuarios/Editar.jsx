import React, { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserForm = ({ user, onChange }) => {
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="name" value={user.name || ''} onChange={onChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email || ''} onChange={onChange} />
      </label>
      <label>
        Senha:
        <input type="password" name="password" value={user.password || ''} onChange={onChange} />
      </label>
      <label>
        Data de Nascimento:
        <input type="date" name="dateOfBirth" value={user.dateOfBirth || ''} onChange={onChange} />
      </label>
      <label>
        Gênero:
        <select name="gender" value={user.gender || ''} onChange={onChange}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </label>
      <label>
        Localização:
        <input type="text" name="location" value={user.location || ''} onChange={onChange} />
      </label>
      <label>
        Preferências:
        <input type="text" name="preferences" value={user.preferences || ''} onChange={onChange} />
      </label>
      <label>
        Biografia:
        <textarea name="biography" value={user.biography || ''} onChange={onChange} />
      </label>
      <label>
        Fotos (URL):
        <input type="url" name="photos" value={user.photos || ''} onChange={onChange} />
      </label>
      <label>
        Interesses:
        <input type="text" name="interests" value={user.interests || ''} onChange={onChange} />
      </label>
    </form>
  );
};

const Editar = () => {
  const userId = 1; // hardcoded for now, can be from route params or props
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const url = `${API_BASE_URL}users/${userId}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar usuário');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (!res.ok) throw new Error('Falha ao atualizar usuário');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setMessage('Usuário atualizado com sucesso!');
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;
    setLoading(true);
    fetch(url, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setMessage('Usuário excluído com sucesso!');
          setUser({});
        } else if (res.status === 404) {
          setError('Usuário não encontrado');
        } else {
          throw new Error('Falha ao excluir usuário');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {!loading && user && Object.keys(user).length > 0 && (
        <>
          <UserForm user={user} onChange={handleChange} />
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={handleDelete} style={{ marginLeft: 10, backgroundColor: 'red', color: 'white' }}>
            Excluir
          </button>
        </>
      )}
    </div>
  );
};

export default Editar;