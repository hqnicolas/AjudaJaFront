import {
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import { logo_ajude_ja_minimizada } from '../../assets/logo/index.jsx'
import { HeaderContainer } from './Header.styles.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Button from '../Button/Button.jsx'
import { useUserContext } from '../../context/UserContext';

export default function Header() {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <CNavbar colorScheme="light" className="bg-white shadow-sm fixed-top">
        <HeaderContainer className="px-4 d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            {/* Sidebar Button (Hamburger) on the left of Logo if logged in */}
            {user && <Sidebar />}

            <CNavbarBrand as={Link} to="/" className="d-flex align-items-center ms-2">
              <img
                src={logo_ajude_ja_minimizada}
                style={{ width: '2.5rem', height: 'auto', marginRight: '0.5rem' }}
              />
            </CNavbarBrand>
          </div>

          <CNavbarNav className="d-flex flex-row align-items-center gap-4">
            {!user ? (
              <>
                <CNavItem>
                  <CNavLink
                    as={Link}
                    to="/"
                    className="text-primary fw-semibold"
                  >
                    Início
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    as={Link}
                    to="/campanhas"
                    className="text-primary fw-semibold"
                  >
                    Campanhas
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink
                    as={Link}
                    to="/sobre"
                    className="text-primary fw-semibold"
                  >
                    Sobre nós
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <Button typeButton={'primary'}>
                    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
                      Entrar
                    </Link>
                  </Button>
                </CNavItem>
              </>
            ) : (
              <CNavItem>
                <Button typeButton={'primary'} onClick={handleLogout} circle title="Sair">
                  <i className="fa-solid fa-right-from-bracket" style={{ fontSize: '1.2rem' }}></i>
                </Button>
              </CNavItem>
            )}
          </CNavbarNav>
        </HeaderContainer>
      </CNavbar>
    </>
  )
}