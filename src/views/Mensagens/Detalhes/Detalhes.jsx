import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CSpinner,
} from '@coreui/react';
import Button from '../../../components/Button/Button'; 
import { Container,ContainerMessageDetails } from './Detalhes.styles';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;







const Detalhes = () => {
    const { id } = useParams();
    const [mensagem, setMensagem] = useState(null);
    const navigate = useNavigate();

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

    const formatarData = (data) => {
        return new Date(data).toLocaleString('pt-BR');
    };

    if (!mensagem) {
        return (
            <Container className="text-center">
                <CSpinner color="primary" />
                <p>Carregando...</p>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Detalhes da Mensagem</h1>

            <CRow className="justify-content-center w-100">
         
                <CCol xs={12} md={8} lg={6}>
                    <CCard className="shadow-sm">
                        <CCardHeader className="text-center fw-bold" style={{ color: 'var(--color-primary)' }}>
                            Detalhes da Mensagem ID: {id}
                        </CCardHeader>
                        <CCardBody>
                            <ContainerMessageDetails>
                                <h3>Mensagem</h3>
                                
                                <p>
                                    <strong>Data de Envio:</strong> {formatarData(mensagem.dataEnvio)}
                                </p>
                                
                                <p className="mt-3">
                                    <strong>Conteúdo:</strong>
                                </p>
                                <p style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', borderLeft: '3px solid var(--color-primary)' }}>
                                    {mensagem.conteudo}
                                </p>

                                <div className="d-flex flex-wrap gap-3 mt-4 w-100 justify-content-center">
                                    <Link to={`/ajude-ja/mensagens/editar/${id}`}>
                                        <Button typeButton={'primary'}>
                                            <i className="fa-solid fa-pen-to-square me-1" /> Editar Mensagem
                                        </Button>
                                    </Link>
                                    <Link to="/ajude-ja/mensagens/nova">
                                        <Button typeButton={'secondary'}>
                                            <i className="fa-solid fa-plus me-1" /> Criar Nova Mensagem
                                        </Button>
                                    </Link>
                                   
                                </div>
                            </ContainerMessageDetails>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </Container>
    );
};

export default Detalhes;