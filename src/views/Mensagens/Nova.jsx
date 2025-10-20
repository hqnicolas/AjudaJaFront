import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Nova = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    remetenteId: id || '',
    conteudo: '',
    dataEnvio: new Date().toISOString(),
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({
        ...prev,
        remetenteId: id,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}api/mensagens`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.mensagem || 'Mensagem enviada com sucesso!');
        setFormData({
          remetenteId: id || 1,  // Resetando remetenteId para id ou 1
          conteudo: '',
          dataEnvio: new Date().toISOString(),
        });
      } else {
        setMessage(data.mensagem || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setMessage('Erro na comunicação com o servidor.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Criar Nova Mensagem</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Conteúdo da Mensagem:
          <textarea
            name="conteudo"
            value={formData.conteudo}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Nova;