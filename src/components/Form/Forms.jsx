import { useRef, useState } from 'react';
import { Container } from './Forms.styles';
import {
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCol,
  CButton,
} from '@coreui/react';
import { logo_ajude_ja } from '../../assets/logo';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function FormsCoreUI() {
  const formRef = useRef();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [typeForm, setTypeForm] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeForm = () => {
    setTypeForm(typeForm === 'register' ? 'login' : 'register');
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeForm === 'register') {
      console.log('Dados de Cadastro:', formData);
      // Chame sua rota de cadastro aqui
    } else {
      console.log('Dados de Login:', formData);
      // Chame sua rota de login aqui
    }
    navigate('/');
  };

  return (
    <Container>
      <CForm className="forms  rounded shadow-sm" onSubmit={handleSubmit} ref={formRef}>
        <div className="text-center ">
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
                {showPass ? (
                  <i className="fa-regular fa-eye-slash" />
                ) : (
                  <i className="fa-regular fa-eye" />
                )}
              </CInputGroupText>
            </CInputGroup>
          </CCol>
        </CRow>

        <div className="text-center mt-3 mb-3">
          <span className="change-form">
            {typeForm === 'register' ? 'Já possui uma conta? ' : 'Ainda não possui uma conta? '}
            <span className="change-form-child" style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={changeForm}>
              {typeForm === 'register' ? 'Entre' : 'Cadastre-se'}
            </span>
            .
          </span>
        </div>

        <div className="btn-submit">
          <Button typeButton="primary" type="submit" className="">
            {typeForm === 'register' ? 'Cadastrar' : 'Entrar'}
          </Button>
        </div>
      </CForm>
    </Container>
  );
}
