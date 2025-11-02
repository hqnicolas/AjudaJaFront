import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CButton,
  CNavbarToggler,
  CCollapse,
} from '@coreui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo_ajude_ja_minimizada } from '../../assets/logo/index.jsx'
import { HeaderContainer } from './Header.styles.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Button from '../Button/Button.jsx'

export default function Header() {
  const [visible, setVisible] = useState(false)
  const handleNavLinkClick = () => setVisible(false)

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-white shadow-sm fixed-top">
        <HeaderContainer fluid className="px-4 d-flex justify-content-center align-items-center">
          <CNavbarToggler
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
            className="me-2"
          />
          <CNavbarBrand as={Link} to="/ajude-ja" className="d-flex align-items-center">
            <img
              src={logo_ajude_ja_minimizada}
              style={{ width: '2.5rem', height: 'auto', marginRight: '0.5rem' }}
            />
          </CNavbarBrand>

          <CCollapse className="navbar-collapse justify-content-center" visible={visible}>
            <CNavbarNav className="d-flex justify-content-center align-items-center gap-4">
              <CNavItem>
                <CNavLink
                  as={Link}
                  to="/ajude-ja"
                  className="text-primary fw-semibold"
                  onClick={handleNavLinkClick}
                >
                  Início
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  as={Link}
                  to="/ajude-ja/campanhas"
                  className="text-primary fw-semibold"
                  onClick={handleNavLinkClick}
                >
                  Campanhas
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  as={Link}
                  to="/ajude-ja/ongs"
                  className="text-primary fw-semibold"
                  onClick={handleNavLinkClick}
                >
                  Ong's
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  as={Link}
                  to="/ajude-ja/noticias"
                  className="text-primary fw-semibold"
                  onClick={handleNavLinkClick}
                >
                  Notícias
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  as={Link}
                  to="/ajude-ja/sobre"
                  className="text-primary fw-semibold"
                  onClick={handleNavLinkClick}
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
            </CNavbarNav>
          </CCollapse>
        </HeaderContainer>
      </CNavbar>
      <Sidebar />
    </>
  )
}