import { useState } from 'react';
import { Container } from './Forms.styles';
import { Form, Col, InputGroup, Row } from 'react-bootstrap';
import { logo_ajude_ja } from '../../assets/logo';
import Button from '../Button/Button';

export default function Forms() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeForm = () => {
    console.log('mudar form');
  }
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <Form className="forms">
        <img src={logo_ajude_ja} alt="logo ajude já" />

        <Row className="form-items">
          {[
            { label: 'Nome Completo', name: 'name', type: 'text', icon: 'fa-user', placeholder: 'Nome completo' },
            { label: 'E-mail', name: 'email', type: 'email', icon: 'fa-envelope', placeholder: 'nummus@nummus.com' },
          ].map(({ label, name, type, icon, placeholder }) => (
            <Col md={12} key={name}>
              <Form.Label>{label}</Form.Label>
              <InputGroup>
                <InputGroup.Text><i className={`fa-solid ${icon}`} /></InputGroup.Text>
                <Form.Control
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </InputGroup>
            </Col>
          ))}

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
              />
              <InputGroup.Text
                onClick={() => setShowPass(!showPass)}
                style={{ cursor: 'pointer' }}
              >
                {showPass ? <i className="fa-regular fa-eye-slash" /> :  <i className="fa-regular fa-eye" />}
               
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <span  className='change-form'>Já tem uma conta?
           <span  className='change-form-child' onClick={changeForm()}>Entre</span>.
        </span>
        <Button
        text={'Cadastrar'}
        typeButton={'primary'}
        className='btn-submit'
        ></Button>
      </Form>
    </Container>
  );
}
