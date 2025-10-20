import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
  const { id } = useParams();
  const [mensagem, setMensagem] = useState(null);
  const navigate = useNavigate(); // Hook para navegação programática

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}api/mensagens/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar a mensagem');
        }
        return res.json();
      })
      .then(data => setMensagem(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!mensagem) return <div>Carregando...</div>;

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div>
      <h1>Detalhes da Mensagem</h1>
      <p><strong>Conteúdo:</strong> {mensagem.conteudo}</p>
      <p><strong>Data de Envio:</strong> {formatarData(mensagem.dataEnvio)}</p>

      {/* Links para navegação */}
      <div>
        <Link to="/ajude-ja/mensagens" style={{ marginRight: '10px' }}>
          Voltar para Lista de Mensagens
        </Link>
        <Link to={`/ajude-ja/mensagens/editar/${id}`} style={{ marginRight: '10px' }}>
          Editar Mensagem
        </Link>
        <Link to="/ajude-ja/mensagens/nova">
          Criar Nova Mensagem
        </Link>
      </div>
    </div>
  );
};

export default Detalhes;