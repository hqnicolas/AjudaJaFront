import { useState } from 'react'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilFile, cilGraph,  cilUser, cilMenu, cilBell } from '@coreui/icons'
import { logo_ajude_ja_minimizada } from '../../assets/logo'


export default function Sidebar() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton
        onClick={() => setVisible(!visible)}
        style={{
          top: '',
          left: '1rem',
          zIndex: 1100,
          borderRadius: '5px',
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CIcon icon={cilMenu} size="lg" />
      </CButton>

      <CSidebar
        overlaid
        placement="start"
        visible={visible}
        onVisibleChange={setVisible}
        style={{ zIndex: 1050, 'marginTop': '4rem' }}
      >
        <CSidebarHeader className="border-bottom">
          <CSidebarBrand>
            <img src={logo_ajude_ja_minimizada} alt="Logo" width={'30px'} />
          </CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <CNavTitle>Administração</CNavTitle>
          <CNavItem href="/ajude-ja/doacoes">
            <CIcon customClassName="nav-icon" icon={cilGraph} /> Doações
          </CNavItem>
          <CNavItem href="/ajude-ja/usuarios">
            <CIcon customClassName="nav-icon" icon={cilUser} /> Usuários
          </CNavItem>
          <CNavItem href="/ajude-ja/mensagens">
            <CIcon customClassName="nav-icon" icon={cilBell} /> Mensagens
          </CNavItem>
          <CNavItem href="/ajude-ja/relatorios/gerar">
            <CIcon customClassName="nav-icon" icon={cilFile} /> Relatórios
          </CNavItem>
        </CSidebarNav>
      </CSidebar>
    </>
  )
}
