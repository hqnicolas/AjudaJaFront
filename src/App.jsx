import { Outlet, useLocation } from 'react-router-dom';
import { Container } from './App.styles.jsx'
import Header from './components/Header/Header.jsx';
import Sidebar from './components/SideBar/Sidebar.js';

function App() {

  const location = useLocation();

  const showHeader = location.pathname !== '/login';

  return (
    <Container>
      {showHeader && <Header />}
      <main>
        <Outlet />
      </main>
       <Sidebar/>
    </Container>
  )
}

export default App;