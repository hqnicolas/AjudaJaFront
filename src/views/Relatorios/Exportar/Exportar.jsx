import { useState } from 'react';
import { CButton,  CCardBody, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CSpinner } from '@coreui/react';
import { Container } from './Exportar.styles';
import CardComponent from '../../../components/Card/Card';

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
    
    if (!startDate || !endDate) {
      setError('Por favor, preencha as datas de Início e Fim.');
      return;
    }

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

        const errorText = await response.text();
        throw new Error(`Erro ${response.status}: ${errorText || 'Falha na exportação do relatório.'}`);
      }

      const blob = await response.blob();
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename =
        contentDisposition?.split('filename=')[1]?.replaceAll('"', '') ||
        `relatorio_${new Date().toISOString().slice(0, 10)}.${format}`;

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMessage('Relatório exportado com sucesso! 🎉');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

return (


    <Container className="d-flex flex-column  p-3">
        
        <h1 className="m-0 mb-4">Exportar Relatório de Doações</h1>
        
        <CardComponent className="shadow-sm w-75 w-md-50 mx-auto"> 
            <CCardBody> 
                <CForm onSubmit={handleExport} className="row g-3 mx-auto" style={{ maxWidth: '800px' }}> 
                    <CCol md={6} lg={4}>
                        <CFormLabel htmlFor="startDate">Data de Início</CFormLabel>
                        <CFormInput
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </CCol>

                    <CCol md={6} lg={4}>
                        <CFormLabel htmlFor="endDate">Data de Fim</CFormLabel>
                        <CFormInput
                            type="date"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </CCol>
                    <CCol md={6} lg={4}>
                        <CFormLabel htmlFor="type">Tipo de Doação</CFormLabel>
                        <CFormSelect 
                            id="type"
                            value={type} 
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="">Selecione...</option>
                            <option value="Material">Material</option>
                            <option value="Financeiro">Financeiro</option>
                        </CFormSelect>
                    </CCol>
                    <CCol md={6} lg={4}>
                        <CFormLabel htmlFor="donor">Doador (Opcional)</CFormLabel>
                        <CFormInput
                            type="text"
                            id="donor"
                            value={donor}
                            onChange={(e) => setDonor(e.target.value)}
                            placeholder="Nome ou ID do doador"
                        />
                    </CCol>
                    <CCol md={6} lg={4}>
                        <CFormLabel htmlFor="format">Formato</CFormLabel>
                        <CFormSelect 
                            id="format"
                            value={format} 
                            onChange={(e) => setFormat(e.target.value)}
                        >
                            <option value="pdf">PDF</option>
                            <option value="csv">CSV</option>
                        </CFormSelect>
                    </CCol>
                    <CCol md={6} lg={4}></CCol>
                    <CCol xs={12} className="mt-4 d-flex justify-content-center">
                        <CButton 
                            type="submit" 
                            color="primary" 
                            disabled={loading}
                            className="w-75 w-md-25"
                        >
                            {loading ? (
                                <>
                                    <CSpinner component="span" size="sm" aria-hidden="true" className="me-2" />
                                    Exportando...
                                </>
                            ) : (
                                'Exportar Relatório'
                            )}
                        </CButton>
                    </CCol>
                </CForm>

                {/* Mensagens de Feedback Centralizadas */}
                {/* Adicionado 'mx-auto' e 'text-center' para centralizar o texto dentro da div de feedback */}
                {error && <div className="mt-3 p-2 text-white bg-danger rounded mx-auto text-center" style={{ maxWidth: '400px' }}>{error} 😢</div>}
                {message && <div className="mt-3 p-2 text-white bg-success rounded mx-auto text-center" style={{ maxWidth: '400px' }}>{message}</div>}
                
            </CCardBody>
        </CardComponent>
    </Container>
);
};

export default Exportar;