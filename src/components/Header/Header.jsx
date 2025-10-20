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
import {HeaderContainer} from './Header.styles.jsx'


export default function Header() {
  const [visible, setVisible] = useState(false)

  return (
 <CNavbar expand="lg" colorScheme="light" className="bg-white shadow-sm fixed-top">
  <HeaderContainer fluid className="px-4">


    <CNavbarToggler
      aria-label="Toggle navigation"
      onClick={() => setVisible(!visible)}
      className="me-2" 
    />


    <CNavbarBrand as={Link} to="/ajude-ja/inicio" className="d-flex align-items-center navbar-left">
      <img
        src={logo_ajude_ja_minimizada}
        style={{ width: '2.5rem', height: 'auto', marginRight: '0.5rem' }}
      />
    </CNavbarBrand>

  <CCollapse className="navbar-collapse" visible={visible}>
  <CNavbarNav className="mx-auto flex-lg-row flex-column">
    <CNavItem>
      <CNavLink as={Link} to="/ajude-ja/inicio" className="text-primary fw-semibold">
        Início
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink as={Link} to="/ajude-ja/campanhas" className="text-primary fw-semibold">
        Campanhas
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink as={Link} to="/ajude-ja/ongs" className="text-primary fw-semibold">
        Ong's
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink as={Link} to="/ajude-ja/noticias" className="text-primary fw-semibold">
        Notícias
      </CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink as={Link} to="/ajude-ja/sobre" className="text-primary fw-semibold">
        Sobre nós
      </CNavLink>
    </CNavItem>
  </CNavbarNav>
</CCollapse>


  </HeaderContainer>
</CNavbar>

  )
}
