import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Novo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    preferences: '',
    biography: '',
    photos: '',
    interests: '',
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
      const response = await fetch(`${API_BASE_URL}users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.mensagem || 'Usuário criado com sucesso!');
        setFormData({
          name: '',
          email: '',
          password: '',
          dateOfBirth: '',
          gender: '',
          location: '',
          preferences: '',
          biography: '',
          photos: '',
          interests: '',
        });
      } else {
        setMessage(data.mensagem || 'Erro ao criar usuário');
      }
    } catch (error) {
      setMessage('Erro na comunicação com o servidor.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Criar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Data de Nascimento:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Gênero:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </label>
        <br />

        <label>
          Localização:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <br />

        <label>
          Preferências:
          <input type="text" name="preferences" value={formData.preferences} onChange={handleChange} />
        </label>
        <br />

        <label>
          Biografia:
          <textarea name="biography" value={formData.biography} onChange={handleChange} />
        </label>
        <br />

        <label>
          Fotos (URL):
          <input type="url" name="photos" value={formData.photos} onChange={handleChange} />
        </label>
        <br />

        <label>
          Interesses:
          <input type="text" name="interests" value={formData.interests} onChange={handleChange} />
        </label>
        <br />

        <button type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Usuário'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Novo;