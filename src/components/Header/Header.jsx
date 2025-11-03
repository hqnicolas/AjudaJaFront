import {
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,

} from '@coreui/react'
import { Link } from 'react-router-dom'
import { logo_ajude_ja_minimizada } from '../../assets/logo/index.jsx'
import { HeaderContainer } from './Header.styles.jsx'
import Sidebar from '../SideBar/Sidebar.jsx' 
import Button from '../Button/Button.jsx'

export default function Header() {
 
  
  const handleNavLinkClick = () => setVisible(false)

  return (
    <>
      <CNavbar colorScheme="light" className="bg-white shadow-sm fixed-top">
        <HeaderContainer className="px-4 d-flex justify-content-between align-items-center">
       
          <CNavbarBrand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo_ajude_ja_minimizada}
              style={{ width: '2.5rem', height: 'auto', marginRight: '0.5rem' }}
            />
          </CNavbarBrand>
         <CNavbarNav className="d-flex flex-row align-items-center gap-4">
            <CNavItem>
              <CNavLink
                as={Link}
                to="/"
                className="text-primary fw-semibold"
                onClick={handleNavLinkClick}
              >
                Início
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={Link}
                to="/campanhas"
                className="text-primary fw-semibold"
                onClick={handleNavLinkClick}
              >
                Campanhas
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={Link}
                to="/ongs"
                className="text-primary fw-semibold"
                onClick={handleNavLinkClick}
              >
                Ong's
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={Link}
                to="/noticias"
                className="text-primary fw-semibold"
                onClick={handleNavLinkClick}
              >
                Notícias
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={Link}
                to="/sobre"
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
           <Sidebar />
        </HeaderContainer>
      </CNavbar>
    </>
  )
}