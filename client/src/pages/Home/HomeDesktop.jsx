import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../controllers/user.controller.js';
import { styled, useTheme } from '@mui/material/styles';
import Home from './Home';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListIcon from '@mui/icons-material/List';
import SportsIcon from '@mui/icons-material/Sports';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import BoyIcon from '@mui/icons-material/Boy';
import StoreIcon from '@mui/icons-material/Store';

const userIcons = [<HomeIcon />, <AccountCircleIcon />, <ReceiptIcon />, <StoreIcon />];

const entretiempoIcons = [<NewspaperIcon />, <SportsSoccerIcon />, <ListIcon />, <SportsIcon />, <BoyIcon />];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function HomeDesktop() {

  useEffect(() => document.title = 'Inicio - Entretiempo Sanjuanino', []);

  const theme = useTheme();

  const goto = useNavigate();

  const [logged, setLogged] = useState(localStorage.getItem('loggedIn') && localStorage.getItem('data') ? JSON.parse(localStorage.getItem('loggedIn')) : false);
  const userName = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')).userName : 'Indefinido';

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePages = (page) => {
    handleDrawerClose();
    goto(`/${page}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            title='Menú'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => goto('/')} variant="h6" noWrap component="span" sx={{ '&:hover': { cursor: 'pointer' } }}>
            Entretiempo Sanjuanino
          </Typography>
          <Button variant='contained' onClick={() => goto('/comprar')} color='info' size='large' sx={{ marginLeft: 'auto', '&:hover': { cursor: 'pointer' } }}>¡Consigue más puntos!</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography sx={{ fontWeight: '100', fontSize: '20px' }}>Menú principal</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton title='Inicio' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {userIcons[0]}
            </ListItemIcon>
            <ListItemText primary={'Inicio'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {
            logged ?
              <>
                <ListItemButton title={`Perfil de ${userName}`} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('cuenta')}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    {userIcons[1]}
                  </ListItemIcon>
                  <ListItemText primary={`Perfil (${userName})`} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <ListItemButton title='Mis pronósticos' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('pronosticos')}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    {userIcons[2]}
                  </ListItemIcon>
                  <ListItemText primary={'Mis pronósticos'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <ListItemButton title='Tienda de puntos' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('tienda')}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    {userIcons[3]}
                  </ListItemIcon>
                  <ListItemText primary={'Tienda de puntos'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </>
              :
              <>
                <ListItemButton title='Registrarme' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('registro')}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    <PersonAddAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Registrarme'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <ListItemButton title='Iniciar sesión' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('login')}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Iniciar sesión'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </>
          }
        </List>
        <Divider />
        <List>
          <ListItemButton title='Noticias' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('noticias')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {entretiempoIcons[0]}
            </ListItemIcon>
            <ListItemText primary={'Noticias'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton title='Partidos' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('partidos')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {entretiempoIcons[1]}
            </ListItemIcon>
            <ListItemText primary={'Partidos'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton title='Tablas' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('posiciones')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {entretiempoIcons[2]}
            </ListItemIcon>
            <ListItemText primary={'Tabla de posiciones'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* <ListItemButton title='Equipos' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('equipos')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {entretiempoIcons[3]}
            </ListItemIcon>
            <ListItemText primary={'Equipos'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <ListItemButton title='Jugadores' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('jugadores')}>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              {entretiempoIcons[4]}
            </ListItemIcon>
            <ListItemText primary={'Jugadores'} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton> */}
        </List>
        {
          logged ?
            <>
              <Divider />
              <List>
                <ListItemButton title='Cerrar sesión' sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => {
                  logOut()
                  setLogged(false)
                }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Cerrar sesión'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </List>
            </>
            :
            null
        }
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Home logged={logged} />
      </Box>
    </Box>
  );
}
