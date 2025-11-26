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
  CFormSelect,
  CButton,
  CSpinner,
  CAlert,
} from '@coreui/react';
import { Container } from './Editar.styles';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Editar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donation, setDonation] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const url = `${API_BASE_URL}donation/${id}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => { if (!res.ok) throw new Error('Falha ao buscar doação'); return res.json(); })
      .then(data => {
        if (data.expiryDate) data.expiryDate = data.expiryDate.split('T')[0];
        if (data.receiverDate) data.receiverDate = data.receiverDate.split('T')[0];
        setDonation(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation),
    })
      .then(res => { if (!res.ok) throw new Error('Falha ao atualizar doação'); return res.json(); })
      .then(data => {
        setDonation(data);
        setMessage('Doação atualizada com sucesso!');
        setError(null);
        setTimeout(() => navigate('/doacoes'), 2000);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    if (!window.confirm('Tem certeza que deseja excluir esta doação?')) return;
    setLoading(true);
    fetch(url, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) {
          setMessage('Doação excluída com sucesso!');
          setDonation({});
          setTimeout(() => navigate('/doacoes'), 2000);
        } else if (res.status === 404) {
          setError('Doação não encontrada');
        } else {
          throw new Error('Falha ao excluir doação');
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <div className="forms">
        <h2 className="text-center mb-4">Editar Doação</h2>

        {loading && !donation.name && (
          <div className="text-center my-3">
            <CSpinner color="primary" />
            <p>Carregando...</p>
          </div>
        )}

        {error && <CAlert color="danger">{error}</CAlert>}
        {message && <CAlert color="success">{message}</CAlert>}

        {!loading && donation && Object.keys(donation).length > 0 && (
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
                    value={donation.name || ''}
                    onChange={handleChange}
                    maxLength={255}
                    required
                  />
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                <CFormLabel htmlFor="type">Tipo</CFormLabel>
                <CFormSelect
                  id="type"
                  name="type"
                  value={donation.type || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Material">Material</option>
                  <option value="Financeira">Financeira</option>
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
                    value={donation.quantity || ''}
                    onChange={handleChange}
                    required
                  />
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                <CFormLabel htmlFor="donor">Armazém</CFormLabel>
                <CInputGroup>
                  <CInputGroupText>
                    <i className="fa-solid fa-hands-helping" />
                  </CInputGroupText>
                  <CFormInput
                    type="text"
                    id="donor"
                    name="donor"
                    value={donation.donor || ''}
                    onChange={handleChange}
                    maxLength={255}
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
                  value={donation.receiverDate || ''}
                  onChange={handleChange}
                  max="9999-12-31"
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
                    value={donation.validityPeriod || ''}
                    onChange={handleChange}
                    required
                  />
                </CInputGroup>
              </CCol>

              {donation.expiryDate && (
                <CCol md={6}>
                  <CFormLabel htmlFor="expiryDate">Data de Expiração</CFormLabel>
                  <CFormInput
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={donation.expiryDate || ''}
                    onChange={handleChange}
                    max="9999-12-31"
                  />
                </CCol>
              )}
            </CRow>

            <div className="d-flex justify-content-between mt-4">
              <div className="d-flex gap-2">
                <CButton color="primary" type="submit" disabled={loading}>
                  {loading ? <CSpinner size="sm" /> : <><i className="fa-solid fa-floppy-disk me-1" /> Salvar</>}
                </CButton>
                <CButton color="secondary" onClick={() => navigate(-1)} disabled={loading}>
                  Cancelar
                </CButton>
              </div>
              <CButton color="danger" onClick={handleDelete} disabled={loading}>
                <i className="fa-solid fa-trash-can me-1" /> Excluir
              </CButton>
            </div>
          </CForm>
        )}
      </div>
    </Container>
  );
};

export default Editar;