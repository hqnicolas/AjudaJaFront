import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCol,
  CFormSelect,
  CFormTextarea,
  CSpinner,
} from '@coreui/react';
import { Container } from './Detalhes.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function DetalhesUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}users/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar o usuário');
        }
        return res.json();
      })
      .then(data => {
        if (data.dateOfBirth) {
          data.dateOfBirth = data.dateOfBirth.slice(0, 10);
        }
        setUser(data);
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

  if (!user) {
    return (
      <Container>
        <p>Usuário não encontrado.</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="forms">
        <h2 className="text-center mb-4">Detalhes do Usuário</h2>

        <CForm>
          <CRow className="g-3">
            <CCol md={6}>
              <CFormLabel>Nome</CFormLabel>
              <CInputGroup>
                <CInputGroupText>
                  <i className="fa-solid fa-user" />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  value={user.name || ''}
                  readOnly
                  disabled
                />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel>Email</CFormLabel>
              <CInputGroup>
                <CInputGroupText>
                  <i className="fa-solid fa-envelope" />
                </CInputGroupText>
                <CFormInput
                  type="email"
                  value={user.email || ''}
                  readOnly
                  disabled
                />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel>Data de Nascimento</CFormLabel>
              <CFormInput
                type="date"
                value={user.dateOfBirth || ''}
                readOnly
                disabled
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel>Gênero</CFormLabel>
              <CFormInput
                type="text"
                value={user.gender || ''}
                readOnly
                disabled
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel>Localização</CFormLabel>
              <CFormInput
                type="text"
                value={user.location || ''}
                readOnly
                disabled
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel>Preferências</CFormLabel>
              <CFormInput
                type="text"
                value={user.preferences || ''}
                readOnly
                disabled
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel>Interesses</CFormLabel>
              <CFormInput
                type="text"
                value={user.interests || ''}
                readOnly
                disabled
              />
            </CCol>

            <CCol md={12}>
              <CFormLabel>Biografia</CFormLabel>
              <CFormTextarea
                value={user.biography || ''}
                readOnly
                disabled
                rows={4}
              />
            </CCol>

            <CCol md={12}>
              <CFormLabel>Foto (URL)</CFormLabel>
              <CFormInput
                type="url"
                value={user.photos || ''}
                readOnly
                disabled
              />
              {user.photos && (
                <div className="mt-2 text-center">
                  <img src={user.photos} alt="Foto do usuário" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
                </div>
              )}
            </CCol>
          </CRow>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button typeButton="primary" type="button" onClick={() => navigate(`/usuarios/editar/${user.id}`)}>
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
}
