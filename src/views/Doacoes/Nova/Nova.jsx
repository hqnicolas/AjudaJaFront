import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CForm,
    CFormInput,
    CFormLabel,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCol,
    CFormSelect,
} from '@coreui/react';

import { Container } from './Nova.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Nova() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        quantity: '',
        donor: '',
        receiverDate: '',
        validityPeriod: '',
    });

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setIsSuccess(false);

        try {
            const response = await fetch(`${API_BASE_URL}donation`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setMessage(data.mensagem || 'Doação criada com sucesso!');
                setFormData({
                    name: '',
                    type: '',
                    quantity: '',
                    donor: '',
                    receiverDate: '',
                    validityPeriod: '',
                });
                navigate('/ajude-ja/doacoes');
            } else {
                console.error('Erro no servidor:', data);
                setMessage(data.mensagem || 'Erro ao criar doação.');
            }
        } catch (error) {
            console.error('Erro na comunicação:', error);
            setMessage('Erro na comunicação com o servidor.');
        }

        setLoading(false);
    };

    return (
        <Container>
            <div className="forms">
                <h2 className="text-center mb-4">Reportar uma Nova Doação</h2>

                <CForm onSubmit={handleSubmit}>
                    <CRow className="g-3">
                        <CCol md={6}>
                            <CFormLabel htmlFor="name">Nome da Doação</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-box" />
                                </CInputGroupText>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ex: Roupas, Alimentos, Medicamentos"
                                    required
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="type">Tipo</CFormLabel>
                            <CFormSelect
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="Material">Material</option>
                                <option value="Financeiro">Financeiro</option>
                            </CFormSelect>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="quantity">Quantidade</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-hashtag" />
                                </CInputGroupText>
                                <CFormInput
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    placeholder="Ex: 50 ou 1000.50 (se financeiro)"
                                    required
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="donor">Doador</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-hands-helping" />
                                </CInputGroupText>
                                <CFormInput
                                    type="text"
                                    id="donor"
                                    name="donor"
                                    value={formData.donor}
                                    onChange={handleChange}
                                    placeholder="Nome do Doador ou 'Anônimo'"
                                    required
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="receiverDate">Data de Recebimento</CFormLabel>
                            <CFormInput
                                type="date"
                                id="receiverDate"
                                name="receiverDate"
                                value={formData.receiverDate}
                                onChange={handleChange}
                                required
                            />
                        </CCol>

                        <CCol md={6}>
                            <CFormLabel htmlFor="validityPeriod">Período de Validade (em dias)</CFormLabel>
                            <CInputGroup>
                                <CInputGroupText>
                                    <i className="fa-solid fa-calendar-days" />
                                </CInputGroupText>
                                <CFormInput
                                    type="number"
                                    id="validityPeriod"
                                    name="validityPeriod"
                                    value={formData.validityPeriod}
                                    onChange={handleChange}
                                    placeholder="Ex: 365"
                                    required
                                />
                            </CInputGroup>
                        </CCol>
                        
                     </CRow>

                    <div className="btn-submit mt-4">
                        <Button typeButton="primary" type="submit" disabled={loading}>
                            {loading ? 'Criando...' : 'Criar Doação'}
                        </Button>
                    </div>

                    {message && (
                        <p className="text-center mt-3" style={{ color: response.ok ? '#007bff' : 'red', fontWeight: '500' }}>
                            {message}
                        </p>
                    )}
                </CForm>
            </div>
        </Container>
    );
} 