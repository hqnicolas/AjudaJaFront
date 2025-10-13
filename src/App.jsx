import { Outlet, useLocation } from 'react-router-dom';
import { Container } from './App.styles.jsx'
import Header from '/components/header/Header.jsx'

function App() {

  const location = useLocation();

  const showHeader = location.pathname !== '/login';

  return (
    <Container>
      {showHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </Container>
  )
}

export default App;