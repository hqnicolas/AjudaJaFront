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
        // Lida com formatos de string 'dd/mm/yyyy' ou 'yyyy-mm-dd' (do backend)
        if (typeof data === 'string' && data.includes('/')) {
            const [day, month, year] = data.split('/');
            // Usamos new Date() com o formato padronizado yyyy-mm-dd para evitar problemas de fuso horário
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
                                    <strong>Doador:</strong> {donation.donor || 'Anônimo'}
                                </p>
                                <p>
                                    <strong>Data de Recebimento:</strong> {formatarData(donation.receiverDate)}
                                </p>
                                <p>
                                    <strong>Data de Expiração:</strong> {formatarData(donation.expiryDate)}
                                </p>

                                {/* Detalhes com o estilo de bloco de conteúdo */}
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

                                {/* Relatório */}
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

                                {/* Botões de Ação */}
                                <div className="d-flex flex-wrap gap-3 mt-4 w-100 justify-content-center">
                                    <Link to={`/ajude-ja/doacoes/editar/${id}`}>
                                        <Button typeButton={'primary'}>
                                            <i className="fa-solid fa-pen-to-square me-1" /> Editar Doação
                                        </Button>
                                    </Link>
                                    <Link to="/ajude-ja/doacoes/novo">
                                        <Button typeButton={'secondary'}>
                                            <i className="fa-solid fa-plus me-1" /> Criar Nova Doação
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