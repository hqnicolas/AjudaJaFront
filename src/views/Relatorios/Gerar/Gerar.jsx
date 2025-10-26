import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { CButton, CCardBody,  CCol, CForm, CFormInput, CFormLabel, CFormSelect, CSpinner } from '@coreui/react';
import CardComponent from '../../../components/Card/Card';
import { Container } from './Gerar.styles';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const RelatorioItem = ({ relatorio }) => (
  <div style={{ marginBottom: "20px" }}>
    <h3>ID: {relatorio.id}</h3>
    <h3>Nome da Doação: {relatorio.name}</h3>
    <p><strong>Tipo:</strong> {relatorio.donationType}</p>
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
  const [donationType, setDonationType] = useState('');
  const [donor, setDonor] = useState('');
  const [relatorios, setRelatorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const url = `${API_BASE_URL}donation/reports/generate/${startDate}/${endDate}/${donationType}/${donor}`;

      const res = await fetch(url, {
        method: 'GET',
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
    <Container>

      <h1>Gerar Relatório de Doações</h1>
      <CardComponent className="shadow-sm flex-column w-80">

        <CCardBody>

          <CForm onSubmit={handleSubmit} className="row g-3 mb-4">


            <CCol md={6} lg={3}>
              <CFormLabel htmlFor="startDate">Data de Início</CFormLabel>
              <CFormInput
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </CCol>


            <CCol md={6} lg={3}>
              <CFormLabel htmlFor="endDate">Data de Fim</CFormLabel>
              <CFormInput
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </CCol>


            <CCol md={6} lg={3}>
              <CFormLabel htmlFor="donationType">Tipo de Doação</CFormLabel>
              <CFormSelect
                id="donationType"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                <option value="Material">Material</option>
                <option value="Financeiro">Financeiro</option>
              </CFormSelect>
            </CCol>

            <CCol md={6} lg={3}>
              <CFormLabel htmlFor="donor">Doador</CFormLabel>
              <CFormInput
                type="text"
                id="donor"
                value={donor}
                onChange={(e) => setDonor(e.target.value)}
                placeholder="Nome ou ID do doador"
                required
              />
            </CCol>

            <CCol xs={12} className="mt-4 d-flex justify-content-center">
              <Button
                type="submit"
                typeButton={'primary'}
                disabled={loading}

                className="w-50 w-md-25"
              >
                {loading ? (
                  <>
                    <CSpinner component="span" size="sm" aria-hidden="true" className="me-2" />
                    Gerando...
                  </>
                ) : (
                  'Gerar Relatório'
                )}
              </Button>
            </CCol>
          </CForm>


          {error && <div className="p-2 text-white bg-danger rounded mb-3">{error}</div>}

          <div className="mt-4 pt-3 border-top">
            <h4 className="mb-3">Resultados</h4>

            {relatorios.length === 0 ? (
              <p className="text-center text-muted">Nenhuma doação encontrada para os filtros aplicados.</p>
            ) : (

              relatorios.map((relatorio) => (
                <RelatorioItem key={relatorio.id} relatorio={relatorio} />
              ))
            )}
          </div>

          <div className="mt-4 pt-3 border-top text-end">
            <Link to="/ajude-ja/relatorios/exportar">

              <CButton color="secondary">Exportar Relatório</CButton>
            </Link>
          </div>
        </CCardBody>
      </CardComponent>

    </Container>
  );
};

export default Gerar;