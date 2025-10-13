import { useRef, useState } from 'react';
import { Container } from './Forms.styles';
import { Form, Col, InputGroup, Row } from 'react-bootstrap';
import { logo_ajude_ja } from '../../assets/logo';
import Button from '../Button/Button';
import { set } from 'lodash';

export default function Forms() {
  const formRef = useRef();
  const [showPass, setShowPass] = useState(false);
  const [typeForm, setTypeForm] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeForm = () => {
    setTypeForm(typeForm === 'register' ? 'login' : 'register');
    setFormData({ name: '', email: '', password: '' });
  };
  const handleSubmit = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }


    );

  return (
    <Container>
      <Form className="forms" onSubmit={handleSubmit} ref={formRef}>
        <img src={logo_ajude_ja} alt="logo ajude já" />

        <Row className="form-items">
          {typeForm === 'register' && (
            <Col md={12}>
              <Form.Label>Nome Completo</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className="fa-solid fa-user" /></InputGroup.Text>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  required={true}
                />
              </InputGroup>
            </Col>
          )}

          <Col md={12}>
            <Form.Label>E-mail</Form.Label>
            <InputGroup>
              <InputGroup.Text><i className="fa-solid fa-envelope" /></InputGroup.Text>
              <Form.Control
                type="email"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="user@example.com"
                required={true}
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <Form.Label>Senha</Form.Label>
            <InputGroup>
              <InputGroup.Text><i className="fa-solid fa-lock" /></InputGroup.Text>
              <Form.Control
                type={showPass ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="***********"
                 required={true}
              />
              <InputGroup.Text
                onClick={() => setShowPass(!showPass)}
                style={{ cursor: 'pointer' }}
              >
                {showPass
                  ? <i className="fa-regular fa-eye-slash" />
                  : <i className="fa-regular fa-eye" />}
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <span className="change-form">
          {typeForm === 'register' ? 'Já possui uma conta? ' : 'Ainda não possui uma conta? '}
          <span className="change-form-child" onClick={changeForm}>
            {typeForm === 'register' ? 'Entre' : 'Cadastre-se'}
          </span>.
        </span>


        {typeForm === 'register' ? (
          <Button
            text={'Cadastrar'}
            typeButton={'primary'}
            className="btn-submit"
          />
        ) : (
          <Button
            text={'Entrar'}
            typeButton={'primary'}
            className="btn-submit"
          />
        )}
      </Form>
    </Container>
  );
}
