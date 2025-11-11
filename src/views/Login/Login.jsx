import { useUserContext } from '../../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Forms from '../../components/Form/Forms';
import { Container } from './Login.styles';

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLoginSuccess = (userData) => {
    login(userData);
    console.log('User logged in:', userData);
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <h1>Bem vindo (a)!</h1>
      <Forms onLoginSuccess={handleLoginSuccess} />
    </Container>
  );
}