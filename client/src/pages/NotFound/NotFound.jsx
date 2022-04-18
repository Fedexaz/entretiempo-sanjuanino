import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NotFound() {
  const goto = useNavigate();
  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', margin: '10px', padding: '30px', borderRadius: '5px' }}>
        <Typography variant='h3'>Página no encontrada :(</Typography>
        <Button onClick={() => goto('/')} variant='contained' size='large' sx={{ marginTop: '20px' }}>Volver al Inicio</Button>
      </Box>
      <Footer />
    </>
  )
}
