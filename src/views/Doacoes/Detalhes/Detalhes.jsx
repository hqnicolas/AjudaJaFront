import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    CForm,
    CFormInput,
    CFormLabel,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCol,
    CSpinner,
    CFormTextarea
} from '@coreui/react';

import { Container } from './Detalhes.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Detalhes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [donation, setDonation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`${API_BASE_URL}donation/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar a doação');
                }
                return res.json();
            })
            .then(data => {
                if (data.receiverDate) {
                    data.receiverDate = data.receiverDate.slice(0, 10);
                }
                setDonation(data)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <Container>
                <CSpinner color="primary" />
                <p>Carregando...</p>
            </Container>
        );
    }

    if (!donation) {
        return (
            <Container>
                <p>Doação não encontrada.</p>
            </Container>
        );
    }

    return (
        <Container>
            <div className="forms">
                <h2 className="text-center mb-4">Detalhes da Doação</h2>

                <CForm>
                    <CRow className="g-3">
                        <CCol md={6}>
                            <CFormLabel>Nome da Doação</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-box" />
                                </CInputGroupText>
                                <CFormInput
                                    type="text"
                                    value={donation.name || ''}
                                    readOnly
                                    disabled
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel>Tipo</CFormLabel>
                            <CFormInput
                                type="text"
                                value={donation.type || ''}
                                readOnly
                                disabled
                            />
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel>Quantidade</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-hashtag" />
                                </CInputGroupText>
                                <CFormInput
                                    type="number"
                                    value={donation.quantity || ''}
                                    readOnly
                                    disabled
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel>Armazém</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-hands-helping" />
                                </CInputGroupText>
                                <CFormInput
                                    type="text"
                                    value={donation.donor || ''}
                                    readOnly
                                    disabled
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel>Data de Recebimento</CFormLabel>
                            <CFormInput
                                type="date"
                                value={donation.receiverDate || ''}
                                readOnly
                                disabled
                            />
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel>Período de Validade (dias)</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-calendar-days" />
                                </CInputGroupText>
                                <CFormInput
                                    type="number"
                                    value={donation.validityPeriod || ''}
                                    readOnly
                                    disabled
                                />
                            </CInputGroup>
                        </CCol>

                        {donation.details && (
                            <CCol md={12}>
                                <CFormLabel>Detalhes Adicionais</CFormLabel>
                                <CFormTextarea
                                    value={donation.details}
                                    readOnly
                                    disabled
                                    rows={3}
                                />
                            </CCol>
                        )}

                        {donation.report && (
                            <CCol md={12}>
                                <CFormLabel>Relatório</CFormLabel>
                                <div>
                                    <a href={donation.report} target="_blank" rel="noopener noreferrer">
                                        <Button typeButton={'secondary'}>
                                            <i className="fa-solid fa-file-csv me-1" /> Baixar Relatório
                                        </Button>
                                    </a>
                                </div>
                            </CCol>
                        )}

                    </CRow>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button typeButton="primary" type="button" onClick={() => navigate(`/doacoes/editar/${donation.id}`)}>
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