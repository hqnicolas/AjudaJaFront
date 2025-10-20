import {    
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
  CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {  cilFile, cilGraph, cilHeart,cilUser } from '@coreui/icons'
import { logo_ajude_ja_minimizada } from '../../assets/logo'

export default function Sidebar(){
  return (
    <CSidebar className="border-start" unfoldable  style={{ right: 0, left: 'auto' }}>
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand><img src={logo_ajude_ja_minimizada} alt="" width={'20px'}/></CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Administração</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilGraph} /> Campanhas
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilHeart} /> Doações 
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilUser} /> Usuários 
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilFile} /> Relatórios 
        </CNavItem>

       
      </CSidebarNav>
    </CSidebar>
  )
}
