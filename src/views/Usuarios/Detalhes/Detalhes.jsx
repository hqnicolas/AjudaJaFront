import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CSpinner,
  CImage,
  CButton
} from '@coreui/react';
import { Container, ContainerUserDetails } from './Detalhes.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function DetalhesUsuario() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleEdit = (id) => navigate(`/ajude-ja/usuarios/editar/${id}`);
  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}users/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao buscar o usuário');
        }
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, [id]);

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  if (!user) {
    return (
      <Container>
        <CSpinner color="primary" />
        <p>Carregando...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Detalhes do Usuário</h1>

      <CRow className="justify-content-center w-100">
        <CCol xs={12} md={8} lg={6}>
          <CCard className="shadow-sm">
            <CCardHeader className="text-center fw-bold" style={{ color: 'var(--color-primary)' }}>
              Informações do Usuário
            </CCardHeader>
            <CCardBody>
              <ContainerUserDetails>
                {user.photos && (
                  <CImage
                  src={user.photos}
                  alt={`Foto de ${user.name}`}
                  className="mb-3 rounded"
                  width={200}
                  />
                )}
                <h3>{user.name}</h3>
                <Button typeButton={'primary'} onClick={() => handleEdit(user.id)}>Editar</Button>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Data de Nascimento:</strong> {formatarData(user.dateOfBirth)}</p>
                <p><strong>Gênero:</strong> {user.gender}</p>
                <p><strong>Localização:</strong> {user.location}</p>
                <p><strong>Preferências:</strong> {user.preferences}</p>
                <p><strong>Biografia:</strong> {user.biography}</p>
                <p><strong>Interesses:</strong> {user.interests}</p>
              </ContainerUserDetails>
            </CCardBody>



          </CCard>
        </CCol>
      </CRow>
    </Container>
  );
}
