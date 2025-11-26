import { useState } from 'react';
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
  CFormTextarea,
} from '@coreui/react';
import { Container } from './Novo.styles';
import Button from '../../../components/Button/Button';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function NovoUsuario() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    preferences: '',
    biography: '',
    photos: '',
    interests: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.mensagem || 'Usuário criado com sucesso!');
        setFormData({
          name: '',
          email: '',
          password: '',
          dateOfBirth: '',
          gender: '',
          location: '',
          preferences: '',
          biography: '',
          photos: '',
          interests: '',
        });
        setTimeout(() => navigate(-1), 2000);
      } else {
        setMessage(data.mensagem || 'Erro ao criar usuário');
      }
    } catch (error) {
      setMessage('Erro na comunicação com o servidor.');
    }

    setLoading(false);
  };

  return (
    <Container>
      <div className="forms">
        <h2 className="text-center mb-4">Criar Novo Usuário</h2>

        <CForm onSubmit={handleSubmit}>
          <CRow className="g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="name">Nome</CFormLabel>
              <CInputGroup>
                <CInputGroupText>
                  <i className="fa-solid fa-user" />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite o nome completo"
                  maxLength={255}
                  required
                />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="email">Email</CFormLabel>
              <CInputGroup>
                <CInputGroupText>
                  <i className="fa-solid fa-envelope" />
                </CInputGroupText>
                <CFormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@email.com"
                  maxLength={255}
                  required
                />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="password">Senha</CFormLabel>
              <CInputGroup>
                <CInputGroupText>
                  <i className="fa-solid fa-lock" />
                </CInputGroupText>
                <CFormInput
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  required
                />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="dateOfBirth">Data de Nascimento</CFormLabel>
              <CFormInput
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                max="9999-12-31"
                required
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="gender">Gênero</CFormLabel>
              <CFormSelect
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </CFormSelect>
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="location">Localização</CFormLabel>
              <CFormInput
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Cidade, Estado"
                maxLength={255}
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="preferences">Preferências</CFormLabel>
              <CFormInput
                type="text"
                id="preferences"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                placeholder="Ex: Adoção, Educação, Saúde..."
                maxLength={255}
              />
            </CCol>

            <CCol md={6}>
              <CFormLabel htmlFor="interests">Interesses</CFormLabel>
              <CFormInput
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="Ex: tecnologia, arte, esportes..."
                maxLength={255}
              />
            </CCol>

            <CCol md={12}>
              <CFormLabel htmlFor="biography">Biografia</CFormLabel>
              <CFormTextarea
                id="biography"
                name="biography"
                value={formData.biography}
                onChange={handleChange}
                rows={4}
                placeholder="Conte um pouco sobre você..."
              />
            </CCol>

            <CCol md={12}>
              <CFormLabel htmlFor="photos">Foto (URL)</CFormLabel>
              <CFormInput
                type="url"
                id="photos"
                name="photos"
                value={formData.photos}
                onChange={handleChange}
                placeholder="https://..."
              />
            </CCol>
          </CRow>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button typeButton="primary" type="submit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar usuário'}
            </Button>
            <Button typeButton="secondary" onClick={() => navigate(-1)} disabled={loading}>
              Cancelar
            </Button>
          </div>

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
