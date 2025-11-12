import { useRef, useState, useEffect } from 'react';
import { Container } from './Forms.styles';
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
import { logo_ajude_ja } from '../../assets/logo';
import Button from '../Button/Button';
import CardComponent from '../Card/Card';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Forms({ onLoginSuccess }) {
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
  const formRef = useRef();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [typeForm, setTypeForm] = useState('login');
  const [usersExist, setUsersExist] = useState(true);
  const [emailExists, setEmailExists] = useState(false);
  const [loadingEmailCheck, setLoadingEmailCheck] = useState(false);

  useEffect(() => {
    const checkUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}users`);
        const data = await res.json();
        const exist = data.length > 0;
        setUsersExist(exist);
        if (!exist) setTypeForm('register'); // Only show registration form if no users exist
      } catch (error) {
        console.error('Erro ao verificar usuários existentes:', error);
      }
    };
    checkUsers();
  }, []);

  const checkEmailExists = async (email) => {
    setLoadingEmailCheck(true);
    try {
      const res = await fetch(`${API_BASE_URL}users?email=${email}`);
      const data = await res.json();
      setEmailExists(data.length > 0);
    } catch (error) {
      console.error('Erro ao verificar e-mail:', error);
      setEmailExists(false);
    }
    setLoadingEmailCheck(false);
  };

  useEffect(() => {
    if (formData.email && typeForm === 'register') {
      checkEmailExists(formData.email);
    }
  }, [formData.email, typeForm]);

  const changeForm = () => {
    setTypeForm(typeForm === 'register' ? 'login' : 'register');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeForm === 'register') {
      if (usersExist && emailExists) {
        alert('Este e-mail já está cadastrado. Tente um novo e-mail.');
        return;
      }

      console.log('Dados de Cadastro:', formData);

      try {
        const res = await fetch(`${API_BASE_URL}users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          alert('Usuário registrado com sucesso!');
          changeForm();
        } else {
          alert(data.mensagem || 'Erro ao registrar usuário');
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      }
    } else {
      try {
        const res = await fetch(`${API_BASE_URL}users?email=${formData.email}`);
        const data = await res.json();
        const user = data[0];

        if (user && user.password === formData.password) {
          onLoginSuccess(user);
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <Container>
      <CardComponent>
        <CForm className="forms rounded" onSubmit={handleSubmit} ref={formRef}>
          <div className="text-center">
            <img src={logo_ajude_ja} alt="logo ajude já" style={{ maxWidth: '150px' }} />
          </div>

          <CRow className="g-3">
            {typeForm === 'register' ? (
              <>
                <CCol md={6}>
                  <CFormLabel htmlFor="name">Nome Completo</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>
                      <i className="fa-solid fa-user" />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome completo"
                      required
                    />
                  </CInputGroup>
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="email">E-mail</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>
                      <i className="fa-solid fa-envelope" />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="user@example.com"
                      required
                    />
                  </CInputGroup>
                  {emailExists && !loadingEmailCheck && (
                    <span style={{ color: 'red' }}>Este e-mail já está cadastrado!</span>
                  )}
                  {loadingEmailCheck && <span>Verificando...</span>}
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="password">Senha</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>
                      <i className="fa-solid fa-lock" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="***********"
                      required
                    />
                  </CInputGroup>
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="dateOfBirth">Data de Nascimento</CFormLabel>
                  <CFormInput
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
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
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Cidade, Estado"
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="preferences">Preferências</CFormLabel>
                  <CFormInput
                    type="text"
                    name="preferences"
                    id="preferences"
                    value={formData.preferences}
                    onChange={handleChange}
                    placeholder="Ex: Adoção, Educação, Saúde..."
                  />
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="interests">Interesses</CFormLabel>
                  <CFormInput
                    type="text"
                    name="interests"
                    id="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="Ex: tecnologia, arte, esportes..."
                  />
                </CCol>

                <CCol md={12}>
                  <CFormLabel htmlFor="biography">Biografia</CFormLabel>
                  <CFormTextarea
                    name="biography"
                    id="biography"
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
                    name="photos"
                    id="photos"
                    value={formData.photos}
                    onChange={handleChange}
                    placeholder="https://..."
                  />
                </CCol>
              </>
            ) : (
              <>
                <CCol md={12}>
                  <CFormLabel htmlFor="email">E-mail</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>
                      <i className="fa-solid fa-envelope" />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="user@example.com"
                      required
                    />
                  </CInputGroup>
                </CCol>

                <CCol md={12}>
                  <CFormLabel htmlFor="password">Senha</CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>
                      <i className="fa-solid fa-lock" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="***********"
                      required
                    />
                  </CInputGroup>
                </CCol>
              </>
            )}
          </CRow>

          <div className="btn-submit">
            <Button typeButton="primary" type="submit" disabled={loadingEmailCheck}>
              {typeForm === 'register' ? 'Cadastrar' : 'Entrar'}
            </Button>
          </div>
        </CForm>
      </CardComponent>
    </Container>
  );
}