import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../controllers/user.controller.js';
import Home from './Home';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
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

const userIcons = [<HomeIcon />, <AccountCircleIcon />, <ReceiptIcon />];

const entretiempoIcons = [<NewspaperIcon />, <SportsSoccerIcon />, <ListIcon />, <SportsIcon />];

export default function HomeMobile() {

  useEffect(() => document.title = 'Inicio - Entretiempo Sanjuanino', []);

  const [logged, setLogged] = useState(localStorage.getItem('loggedIn') && localStorage.getItem('data') ? JSON.parse(localStorage.getItem('loggedIn')) : false);
  const userName = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')).userName : 'Indefinido';

  const goto = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const handlePages = (page) => {
    setOpen(false);
    goto(`/${page}`);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('')}>
          <Typography sx={{ fontWeight: '300', fontSize: '20px' }}>Menú principal</Typography>
        </ListItem>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('')}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            {userIcons[0]}
          </ListItemIcon>
          <ListItemText primary={'Inicio'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItem>
        {
          logged ?
            <>
              <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('cuenta')}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {userIcons[1]}
                </ListItemIcon>
                <ListItemText primary={`Perfil (${userName})`} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
              <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('pronosticos')}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {userIcons[2]}
                </ListItemIcon>
                <ListItemText primary={'Mis pronósticos'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            </>
            :
            <>
              <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('registro')}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText primary={'Registrarme'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
              <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('login')}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={'Iniciar sesión'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            </>
        }
      </List>
      <Divider />
      <List>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('noticias')}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            {entretiempoIcons[0]}
          </ListItemIcon>
          <ListItemText primary={'Noticias'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItem>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('partidos')}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            {entretiempoIcons[1]}
          </ListItemIcon>
          <ListItemText primary={'Partidos'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItem>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('posiciones')}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            {entretiempoIcons[2]}
          </ListItemIcon>
          <ListItemText primary={'Tabla de posiciones'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItem>
        <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => handlePages('equipos')}>
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            {entretiempoIcons[3]}
          </ListItemIcon>
          <ListItemText primary={'Equipos'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItem>
      </List>
      {
        logged ?
          <>
            <Divider />
            <List>
              <ListItem sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} onClick={() => {
                logOut()
                setLogged(false)
              }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={'Cerrar sesión'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            </List>
          </>
          :
          null
      }
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              marginRight: 3,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => goto('/')} variant="h6" noWrap component="div" sx={{ '&:hover': { cursor: 'pointer' } }}>
            Entretiempo Sanjuanino
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <Home logged={logged} />
      </Box>
    </>
  );
}