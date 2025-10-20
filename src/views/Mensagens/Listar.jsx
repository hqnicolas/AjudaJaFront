import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Mensagem = ({ mensagem, index }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3>ID: {index + 1}</h3> {/* A numeração do ID começa a partir de 1, com base no índice da lista */}
    <h3>Conteúdo</h3>
    <p>{mensagem.conteudo}</p>
    <p>
      <strong>Enviada em:</strong>{" "}
      {new Date(mensagem.dataEnvio).toLocaleString("pt-BR")}
    </p>
    
    {/* Botões de Editar e Detalhes */}
    <div>
      <Link to={`/ajude-ja/mensagens/editar/${index + 1}`}>
        <Button typeButton="secondary">Editar</Button>
      </Link>
      <Link to={`/ajude-ja/mensagens/detalhes/${index + 1}`}>
        <Button typeButton="primary">Ver Detalhes</Button>
      </Link>
    </div>
  </div>
);

const Listar = () => {
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}api/mensagens`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar mensagens");
        return res.json();
      })
      .then((data) => {
        setMensagens(data); // O backend retorna uma lista de objetos com 'conteudo' e 'dataEnvio'
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando mensagens...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Lista de Mensagens</h1>

      <div>
        <Link to="/ajude-ja/mensagens/nova">
          <Button typeButton="primary">+ Criar Nova Mensagem</Button>
        </Link>
      </div>

      {/* Lista de mensagens */}
      {mensagens.length === 0 ? (
        <p>Nenhuma mensagem encontrada.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {mensagens.map((msg, index) => (
            <Mensagem key={index} mensagem={msg} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listar;