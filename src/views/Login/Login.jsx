import { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Forms from '../../components/Form/Forms';
import NovoUsuario from '../Usuarios/Novo/Novo';
import { Container } from './Login.styles';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [hasUsers, setHasUsers] = useState(null); // null = loading

  useEffect(() => {
    const checkUsers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}users`);
        const data = await res.json();
        setHasUsers(data.length > 0);
      } catch (error) {
        console.error('Erro ao verificar usuários:', error);
        setHasUsers(true); // Fallback to login on error
      }
    };
    checkUsers();
  }, []);

  const handleLoginSuccess = (userData) => {
    login(userData);
    console.log('User logged in:', userData);
    navigate(from, { replace: true });
  };

  if (hasUsers === null) return <div>Carregando...</div>;

  if (!hasUsers) {
    return (
      <Container>
        <h1>Bem vindo (a)!</h1>
        <p className="text-center">Nenhum usuário encontrado. Crie o primeiro administrador.</p>
        <NovoUsuario />
      </Container>
    );
  }

  return (
    <Container>
      <h1>Bem vindo (a)!</h1>
      <Forms onLoginSuccess={handleLoginSuccess} />
    </Container>
  );
}