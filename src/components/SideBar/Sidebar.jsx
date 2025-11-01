import { useState } from 'react'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material'
import {
  Settings,
  InsertChart,
  People,
  Notifications,
  Description,
} from '@mui/icons-material'
import { ToggleButtonContainer } from './Sidebar.styles'
import { logo_ajude_ja_minimizada } from '../../assets/logo'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => setOpen(!open)
  const closeSidebar = () => setOpen(false)

  return (
    <>
      <ToggleButtonContainer>
        <IconButton color="default" onClick={toggleDrawer}>
          <Settings fontSize="large" />
        </IconButton>
      </ToggleButtonContainer>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        variant="persistent"
        PaperProps={{
          sx: { width: 240, borderRight: '1px solid #ddd', zIndex: 1050 },
        }}
      >
        <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
          <img src={logo_ajude_ja_minimizada} alt="Logo" width="30px" />
        </div>
        <List>
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary' }}>
            Administração
          </Typography>

          <ListItemButton 
            component={Link} 
            to="/ajude-ja/doacoes"
            onClick={closeSidebar}
          >
            <ListItemIcon><InsertChart /></ListItemIcon>
            <ListItemText primary="Doações" />
          </ListItemButton>

          <ListItemButton 
            component={Link} 
            to="/ajude-ja/usuarios"
            onClick={closeSidebar}
          >
            <ListItemIcon><People /></ListItemIcon>
            <ListItemText primary="Usuários" />
          </ListItemButton>

          <ListItemButton 
            component={Link} 
            to="/ajude-ja/mensagens"
            onClick={closeSidebar}
          >
            <ListItemIcon><Notifications /></ListItemIcon>
            <ListItemText primary="Mensagens" />
          </ListItemButton>

          <ListItemButton 
            component={Link} 
            to="/ajude-ja/relatorios/gerar"
            onClick={closeSidebar}
          >
            <ListItemIcon><Description /></ListItemIcon>
            <ListItemText primary="Relatórios" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}