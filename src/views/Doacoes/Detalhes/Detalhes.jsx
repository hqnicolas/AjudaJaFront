import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CSpinner,
    CButton,
} from '@coreui/react';

import { Container, ContainerDetails } from './Detalhes.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
    const { id } = useParams();
    const [donation, setDonation] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`${API_BASE_URL}donation/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar a doação');
                }
                return res.json();
            })
            .then(data => setDonation(data))
            .catch(err => console.error(err));
    }, [id]);

    const formatarData = (data) => {
        if (!data) return 'N/A';
        if (typeof data === 'string' && data.includes('/')) {
            const [day, month, year] = data.split('/');
         
            return new Date(`${year}-${month}-${day}`).toLocaleDateString('pt-BR');
        }
        return new Date(data).toLocaleDateString('pt-BR');
    };

    if (!donation) {
        return (
            <Container className="text-center">
                <CSpinner color="primary" />
                <p>Carregando...</p>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Detalhes da Doação</h1>

            <CRow className="justify-content-center w-100">
                <CCol xs={12} md={8} lg={6}>
                    <CCard className="shadow-sm">
                        <CCardHeader className="text-center fw-bold" style={{ color: 'var(--color-primary)' }}>
                            Detalhes da Doação ID: {id}
                        </CCardHeader>
                        <CCardBody>
                            <ContainerDetails>
                                <h3>Informações da Doação</h3>

                                <p>
                                    <strong>Nome da Doação:</strong> {donation.name || 'N/A'}
                                </p>
                                <p>
                                    <strong>Tipo de Doação:</strong> {donation.type || 'N/A'}
                                </p>
                                <p>
                                    <strong>Quantidade:</strong> {donation.quantity || 'N/A'}
                                </p>
                                <p>
                                    <strong>Estoque:</strong> {donation.donor || 'Local'}
                                </p>
                                <p>
                                    <strong>Data de Recebimento:</strong> {formatarData(donation.receiverDate)}
                                </p>
                                <p>
                                    <strong>Data de Expiração:</strong> {formatarData(donation.expiryDate)}
                                </p>
                                
                                {donation.details && (
                                    <>
                                        <p className="mt-3">
                                            <strong>Detalhes Adicionais:</strong>
                                        </p>
                                        <div className="content-block">
                                            {donation.details}
                                        </div>
                                    </>
                                )}

                                {donation.report && (
                                    <div className="mt-3 w-100">
                                        <h3>Relatório da Doação:</h3>
                                        <a href={donation.report} target="_blank" rel="noopener noreferrer" className="d-block mt-2">
                                            <Button typeButton={'secondary'}>
                                                <i className="fa-solid fa-file-csv me-1" /> Baixar Relatório
                                            </Button>
                                        </a>
                                    </div>
                                )}

                                <div className="d-flex flex-wrap gap-3 mt-4 w-100 justify-content-center">
                                    <Link to={`/doacoes/editar/${id}`}>
                                        <CButton color="info" className="text-dark">
                                            <i className="fa-solid fa-pen-to-square me-1" /> Editar Doação
                                        </CButton>
                                    </Link>
                                    <Link to="/doacoes/novo">
                                        <Button typeButton={'secondary'} >
                                            <i className="fa-solid fa-plus me-1 mt-1" /> Criar Nova Doação
                                        </Button>
                                    </Link>
                                </div>

                            </ContainerDetails>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </Container>
    );
};

export default Detalhes;