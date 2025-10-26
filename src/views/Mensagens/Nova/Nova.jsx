import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    CForm,
    CFormLabel,
    CRow,
    CCol,
    CFormTextarea,
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CSpinner
} from '@coreui/react';

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
    const [error, setError] = useState(null); 

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
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}api/mensagens`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.mensagem || 'Mensagem enviada com sucesso! 🎉');
                setError(null);
                setFormData({
                    remetenteId: id || '', 
                    conteudo: '',
                    dataEnvio: new Date().toISOString(),
                });
            } else {
                setError(data.mensagem || 'Erro ao enviar mensagem.');
                setMessage('');
            }
        } catch (error) {
            setError('Erro na comunicação com o servidor.');
            setMessage('');
        }

        setLoading(false);
    };

    return (
        <div className="p-4 d-flex justify-content-center">
  
            <CCard className="shadow-sm w-100 w-md-75" style={{ maxWidth: '800px' }}>
                <CCardHeader>
                    <h3 className="m-0" style={{ color: "var(--color-primary)" }}>Criar Nova Mensagem</h3>
                </CCardHeader>

                <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                        <CRow className="g-3">
                            
        
                            <CCol xs={12}>
                                <CFormLabel htmlFor="conteudo">Conteúdo da Mensagem</CFormLabel>
                                <CFormTextarea
                                    id="conteudo"
                                    name="conteudo"
                                    value={formData.conteudo}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Digite o texto da sua mensagem aqui..."
                                    required
                                />
                            </CCol>

           
                            {id && (
                                <CCol xs={12}>
                                    <CFormLabel htmlFor="remetenteId">ID do Remetente</CFormLabel>
                                    <CFormTextarea
                                        id="remetenteId"
                                        name="remetenteId"
                                        value={formData.remetenteId}
                                        onChange={handleChange}
                                        disabled
                                    />
                                </CCol>
                            )}

                
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
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Mensagem'
                                    )}
                                </CButton>
                            </CCol>
                        </CRow>
                    </CForm>

             
                    {error && (
                        <div className="mt-3 p-2 text-white bg-danger rounded mx-auto text-center" style={{ maxWidth: '400px' }}>
                            {error} 😢
                        </div>
                    )}
                    {message && (
                        <div className="mt-3 p-2 text-white bg-success rounded mx-auto text-center" style={{ maxWidth: '400px' }}>
                            {message}
                        </div>
                    )}

                </CCardBody>
            </CCard>
        </div>
    );
};

export default Nova;