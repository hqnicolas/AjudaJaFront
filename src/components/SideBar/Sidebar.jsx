import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import {
  Settings,
  InsertChart,
  People,
  Notifications,
  Description,
} from '@mui/icons-material';
import { ToggleButtonContainer } from './Sidebar.styles';
import { logo_ajude_ja_minimizada } from '../../assets/logo';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { user, logout } = useUserContext();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);
  const soraFontSx = { fontFamily: '"Sora", sans-serif' };

  if (!user) return null;

  const handleLogout = () => {
    logout();
    closeSidebar();
  };

  return (
    <>
      <ToggleButtonContainer onClick={toggleDrawer}>
        <IconButton
          sx={{
            color: 'var(--color-primary)',
            border: '0 !important',
            boxShadow: 'none !important',
            background: 'none !important',
            my: '-5px !important',
            fontSize: '1.5rem',
            transition: 'transform 0.1s ease, color 0.2s ease',
            '&:hover': {
              background: 'transparent !important',
              color: 'var(--color-primary-hover)',
              boxShadow: 'none !important',
            },
          }}
        >
          <i className="fa-solid fa-gear"></i>
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
          <img
            src={logo_ajude_ja_minimizada}
            alt="Logo"
            style={{ width: '2.5rem', height: 'auto', marginRight: '0.5rem' }}
          />
        </div>
        <List>
          <Typography
            variant="h6"
            sx={{
              px: 2,
              py: 1,
              color: 'text.',
              ...soraFontSx,
            }}
          >
            Administração
          </Typography>

          <ListItemButton
            component={Link}
            to="/doacoes"
            onClick={closeSidebar}
          >
            <ListItemIcon><InsertChart /></ListItemIcon>
                <ListItemText primary="Doações" primaryTypographyProps={{ sx: soraFontSx,fontWeight: 500,color:'var(--color-text)' }}/>
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/usuarios"
            onClick={closeSidebar}
          >
            <ListItemIcon><People /></ListItemIcon>
       
            <ListItemText primary="Usuários" primaryTypographyProps={{ sx: soraFontSx,fontWeight: 500,color:'var(--color-text)' }} />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/mensagens"
            onClick={closeSidebar}
          >
            <ListItemIcon><Notifications /></ListItemIcon>
                <ListItemText primary="Mensagens" primaryTypographyProps={{ sx: soraFontSx,fontWeight: 500,color:'var(--color-text)' }} />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/relatorios/gerar"
            onClick={closeSidebar}
          >
            <ListItemIcon><Description /></ListItemIcon>
                <ListItemText primary="Relatórios" primaryTypographyProps={{ sx: soraFontSx,fontWeight: 500,color:'var(--color-text)' }} />
          </ListItemButton>

          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <i className="fa-solid fa-sign-out-alt"></i>
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                sx: soraFontSx,
                fontWeight: 500,
                color: 'var(--color-text)',
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}