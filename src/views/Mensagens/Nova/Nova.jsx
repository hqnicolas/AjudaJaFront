import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    CForm,
    CFormLabel,
    CRow,
    CCol,
    CFormTextarea,
    CSpinner
} from '@coreui/react';

import { Container } from './Nova.styles'; 
import Button from '../../../components/Button/Button'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Nova() { 
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
                setMessage(data.mensagem || 'Mensagem enviada com sucesso!');
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
        <Container>
            <div className="forms">
                <h2 className="text-center mb-4">Criar Nova Mensagem</h2>

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
                                <CFormInput
                                    type="text"
                                    id="remetenteId"
                                    name="remetenteId"
                                    value={formData.remetenteId}
                                    onChange={handleChange}
                                    disabled
                                />
                            </CCol>
                        )}
                        
                    </CRow>

                    <div className="btn-submit">
                        <Button typeButton="primary" type="submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <CSpinner component="span" size="sm" aria-hidden="true" className="me-2" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Mensagem'
                            )}
                        </Button>
                    </div>

                    {error && (
                        <p className="text-center mt-3" style={{ color: 'red', fontWeight: '500' }}>
                            {error}
                        </p>
                    )}
                    {message && (
                        <p className="text-center mt-3" style={{ color: '#007bff', fontWeight: '500' }}>
                            {message}
                        </p>
                    )}
                </CForm>
            </div>
        </Container>
    );
}