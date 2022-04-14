import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', background: '#F6FAFF', marginTop: '20px', padding: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Enlaces de interés</Typography>
          <Button href='#' target='_blank' color='inherit' size='small'>API de Entretiempo</Button>
          <Button href='#' target='_blank' color='inherit' size='small'>San Juan con Voz</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Otros servicios</Typography>
          <Button href='#' target='_blank' color='inherit' size='small'>API de Entretiempo</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Contacto</Typography>
          <Button href='#' target='_blank' color='inherit' size='small'>Contacto vía Email</Button>
          <Button href='#' target='_blank' color='inherit' size='small'>Contacto vía WhatsApp</Button>
          <Button href='#' target='_blank' color='inherit' size='small'>Contacto vía Telegram</Button>
          <Button href='#' target='_blank' color='inherit' size='small'>Trabajá con nostros</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', background: '#F6FAFF', padding: '15px' }}>
        <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>Entretiempo Sanjuanino &copy; {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  )
}
