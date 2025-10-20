import { useState } from 'react';
import Button from '../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Exportar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('');
  const [donor, setDonor] = useState('');
  const [format, setFormat] = useState('pdf');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleExport = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setMessage('');

  try {
    let url = `${API_BASE_URL}donation/reports/pdf/${startDate}/${endDate}`;
    if (type) {
      url += `/${type}`;
    }
    if (donor) {
      url += `/${encodeURIComponent(donor)}`;
    }
    url += `?format=${format}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao exportar relatório');
    }

    const blob = await response.blob();
    const contentDisposition = response.headers.get('Content-Disposition');
    const filename =
      contentDisposition?.split('filename=')[1]?.replaceAll('"', '') ||
      `relatorio.${format}`;

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setMessage('Relatório exportado com sucesso!');
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <h1>Exportar Relatório de Doações</h1>

      <form onSubmit={handleExport}>
        <div>
          <label>
            Data de Início:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
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
              required
            />
          </label>
        </div>

        <div>
          <label>
            Tipo de Doação:
            <select value={type} onChange={(e) => setType(e.target.value)} required>
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
          <label>
            Formato:
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
            </select>
          </label>
        </div>

        <div>
          <Button typeButton="primary">Exportar</Button>
        </div>
      </form>

      {loading && <p>Exportando relatório...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default Exportar;