import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MensagemForm = ({ mensagem, onChange }) => {
  return (
    <form>
      <label>
        Remetente ID:
        <input type="number" name="remetenteId" value={mensagem.remetenteId || ''} onChange={onChange} />
      </label>
      <label>
        Conteúdo:
        <textarea name="conteudo" value={mensagem.conteudo || ''} onChange={onChange} />
      </label>
      <label>
        Data de Envio:
        <input type="datetime-local" name="dataEnvio" value={mensagem.dataEnvio?.slice(0, 16) || ''} onChange={onChange} />
      </label>
    </form>
  );
};

const Editar = () => {
  const [mensagem, setMensagem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `${API_BASE_URL}api/mensagens/${id}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Mensagem não encontrada');
        return res.json();
      })
      .then(data => {
        setMensagem(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMensagem(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mensagem),
    })
      .then(res => {
        if (!res.ok) throw new Error('Falha ao atualizar mensagem');
        return res.json();
      })
      .then(data => {
        setMensagem(data);
        setMessage('Mensagem atualizada com sucesso!');
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    if (!window.confirm('Tem certeza que deseja excluir esta mensagem?')) return;
    setLoading(true);
    fetch(url, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setMessage('Mensagem excluída com sucesso!');
          setMensagem({});
          navigate("/ajude-ja/mensagens");
        } else if (res.status === 404) {
          setError('Mensagem não encontrada');
        } else {
          throw new Error('Falha ao excluir mensagem');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Editar Mensagem</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {!loading && mensagem && Object.keys(mensagem).length > 0 && (
        <>
          <MensagemForm mensagem={mensagem} onChange={handleChange} />
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={handleDelete} style={{ marginLeft: 10, backgroundColor: 'red', color: 'white' }}>
            Excluir
          </button>
          <div style={{ marginTop: '20px' }}>
            <Link to={`/ajude-ja/mensagens/detalhes/${id}`} style={{ marginRight: '10px' }}>
              Ver Detalhes
            </Link>
            <Link to="/ajude-ja/mensagens" style={{ marginRight: '10px' }}>
              Voltar para Lista de Mensagens
            </Link>
            <Link to="/ajude-ja/mensagens/nova">
              Criar Nova Mensagem
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Editar;