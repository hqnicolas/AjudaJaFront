import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const RelatorioItem = ({ relatorio }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3>ID: {relatorio.id}</h3>
    <h3>Nome da Doação: {relatorio.name}</h3>
    <p><strong>Tipo:</strong> {relatorio.type}</p>
    <p><strong>Quantidade:</strong> {relatorio.quantity}</p>
    <p><strong>Doador:</strong> {relatorio.donor}</p>
    <p><strong>Data de Recebimento:</strong> {new Date(relatorio.receiverDate).toLocaleDateString("pt-BR")}</p>
    <p><strong>Data de Validade:</strong> {new Date(relatorio.expiryDate).toLocaleDateString("pt-BR")}</p>
    <p><strong>Período de Validade:</strong> {relatorio.validityPeriod} meses</p>
    <Link to={`/ajude-ja/campanhas/detalhes/${relatorio.id}`}>
      <Button typeButton="secondary">Ver Detalhes</Button>
    </Link>
  </div>
);

const Gerar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('');
  const [donor, setDonor] = useState('');
  const [relatorios, setRelatorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    const requestBody = {
      startDate,
      endDate,
      type,
      donor,
    };

    try {
      const res = await fetch(`${API_BASE_URL}api/relatorio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) throw new Error('Erro ao gerar relatório');
      
      const data = await res.json();
      setRelatorios(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Gerar Relatório de Doações</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Data de Início:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Data de Fim:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Tipo de Doação:
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Material">Material</option>
              <option value="Financeiro">Financeiro</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Doador:
            <input
              type="text"
              value={donor}
              onChange={(e) => setDonor(e.target.value)}
            />
          </label>
        </div>

        <div>
          <Button typeButton="primary">Gerar Relatório</Button>
        </div>
      </form>

      {loading && <p>Gerando relatório...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {relatorios.length === 0 ? (
          <p>Nenhuma doação encontrada.</p>
        ) : (
          relatorios.map((relatorio) => (
            <RelatorioItem key={relatorio.id} relatorio={relatorio} />
          ))
        )}
      </div>
      <div>
        <Link to="/ajude-ja/relatorios/exportar">
          <Button typeButton="secondary">Exportar Relatório</Button>
        </Link>
      </div>
    </div>
  );
};

export default Gerar;