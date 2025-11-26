import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    CForm,
    CFormLabel,
    CRow,
    CCol,
    CFormTextarea,
    CFormInput,
    CSpinner
} from '@coreui/react';
import Button from '../../../components/Button/Button';
import { Container } from './Detalhes.styles';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
    const { id } = useParams();
    const [mensagem, setMensagem] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

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
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const formatarData = (data) => {
        return new Date(data).toLocaleString('pt-BR');
    };

    if (loading) {
        return (
            <Container>
                <CSpinner color="primary" />
                <p>Carregando...</p>
            </Container>
        );
    }

    if (!mensagem) {
        return (
            <Container>
                <p>Mensagem não encontrada.</p>
            </Container>
        );
    }

    return (
        <Container>
            <div className="forms">
                <h2 className="text-center mb-4">Detalhes da Mensagem</h2>

                <CForm>
                    <CRow className="g-3">
                        <CCol xs={12}>
                            <CFormLabel>ID da Mensagem</CFormLabel>
                            <CFormInput
                                type="text"
                                value={id}
                                readOnly
                                disabled
                            />
                        </CCol>

                        <CCol xs={12}>
                            <CFormLabel>Data de Envio</CFormLabel>
                            <CFormInput
                                type="text"
                                value={formatarData(mensagem.dataEnvio)}
                                readOnly
                                disabled
                            />
                        </CCol>

                        <CCol xs={12}>
                            <CFormLabel>Conteúdo</CFormLabel>
                            <CFormTextarea
                                value={mensagem.conteudo}
                                readOnly
                                disabled
                                rows={6}
                            />
                        </CCol>
                    </CRow>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button typeButton="primary" type="button" onClick={() => navigate(`/mensagens/editar/${id}`)}>
                            Editar
                        </Button>
                        <Button typeButton="secondary" type="button" onClick={() => navigate(-1)}>
                            Voltar
                        </Button>
                    </div>
                </CForm>
            </div>
        </Container>
    );
};

export default Detalhes;