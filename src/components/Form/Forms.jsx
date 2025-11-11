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
} from '@coreui/react';
import { logo_ajude_ja } from '../../assets/logo';
import Button from '../Button/Button';
import CardComponent from '../Card/Card';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Forms({ onLoginSuccess }) {
  const formRef = useRef();

  const [showPass, setShowPass] = useState(false);
  const [typeForm, setTypeForm] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [usersExist, setUsersExist] = useState(true);

  useEffect(() => {
    const checkUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}users`);
        const data = await res.json();
        const exist = data.length > 0;
        setUsersExist(exist);
        if (!exist) setTypeForm('register');
      } catch (error) {
        console.error('Erro ao verificar usuários existentes:', error);
      }
    };
    checkUsers();
  }, []);

  const changeForm = () => {
    if (!usersExist && typeForm === 'login') return; 
    if (usersExist && typeForm === 'login') return;
    setTypeForm(typeForm === 'register' ? 'login' : 'register');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeForm === 'register') {
      if (usersExist) {
        return;
      }
      console.log('Dados de Cadastro:', formData);
      //fake:
      alert('Usuário registrado com sucesso!');
    } else {
      console.log('Dados de Login:', formData);
      // Fake
      const authenticateUser = () =>
        Promise.resolve({ name: formData.name || 'Demo User', email: formData.email });
      try {
        const userData = await authenticateUser();
        onLoginSuccess(userData);
      } catch (error) {
        console.error('Authentication error:', error);
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
            {typeForm === 'register' && (
              <CCol md={12}>
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
            )}

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
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="***********"
                  required
                />
                <CInputGroupText
                  onClick={() => setShowPass(!showPass)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPass ? <i className="fa-regular fa-eye-slash" /> : <i className="fa-regular fa-eye" />}
                </CInputGroupText>
              </CInputGroup>
            </CCol>
          </CRow>

          <div className="text-center mt-3 mb-3">
            {usersExist ? (
              <span>Cadastro desabilitado, apenas login permitido.</span>
            ) : (
              <span className="change-form">
                {typeForm === 'register' ? 'Já possui uma conta? ' : 'Ainda não possui uma conta? '}
                <span
                  className="change-form-child"
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={changeForm}
                >
                  {typeForm === 'register' ? 'Entre' : 'Cadastre-se'}
                </span>
                .
              </span>
            )}
          </div>

          <div className="btn-submit">
            <Button typeButton="primary" type="submit">
              {typeForm === 'register' ? 'Cadastrar' : 'Entrar'}
            </Button>
          </div>
        </CForm>
      </CardComponent>
    </Container>
  );
}