import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import WebhookIcon from '@mui/icons-material/Webhook';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export default function Footer() {
  return (
    <Box>
      <Box sx={{ display: 'flex', borderRadius: '5px', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', background: '#F6FAFF', marginTop: '20px', padding: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Enlaces de interés</Typography>
          <Button href='#' target='_blank' color='inherit'><InsertLinkIcon sx={{ fontSize: '30px' }} />&nbsp;San Juan con Voz</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Otros servicios</Typography>
          <Button href='#' target='_blank' color='inherit'><WebhookIcon sx={{ fontSize: '30px' }} />&nbsp;API de Entretiempo</Button>
          <Button href='#' target='_blank' color='inherit'><WorkIcon sx={{ fontSize: '30px' }} />&nbsp;Trabajá con nostros</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ textAlign: 'center' }}>Contacto</Typography>
          <Button href='#' target='_blank' color='inherit' size='small'><MailIcon sx={{ fontSize: '30px' }} />&nbsp;Contacto vía Email</Button>
          <Button href='#' target='_blank' color='inherit'><WhatsAppIcon sx={{ fontSize: '30px' }} />&nbsp;Contacto vía WhatsApp</Button>
          <Button href='#' target='_blank' color='inherit'><TelegramIcon sx={{ fontSize: '30px' }} />&nbsp;Contacto vía Telegram</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', background: '#F6FAFF', paddingTop: '15px', paddingBottom: '5px' }}>
        <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>Entretiempo Sanjuanino &copy; {new Date().getFullYear()}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', background: '#F6FAFF', paddingBottom: '15px' }}>
        <a href='https://www.freepik.es/fotos/campo-futbol' target='_blank' style={{ fontSize: '12px'}}>Foto de campo futbol creado por wirestock - www.freepik.es</a>
      </Box>
    </Box>
  )
}
