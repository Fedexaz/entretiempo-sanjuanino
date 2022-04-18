import React, { useEffect } from 'react';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BuyPoints() {
  useEffect(() => document.title = 'Comprar puntos - Entretiempo Sanjuanino');

  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h4' sx={{ my: 3, background: 'white', padding: '10px', borderRadius: '5px' }}>Comprar puntos</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card sx={{ minWidth: 275, marginTop: '10px', marginRight: '10px', transition: '0.3s', '&:hover': { background: '#CFF6FF', transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pack de puntos Básico
              </Typography>
              <Typography variant="h5" component="div">
                100 Puntos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                para canjear en la tienda
              </Typography>
              <Typography variant="h6" component="div">
                A sólo <strong>$250</strong>
              </Typography>
              <Typography variant="body2">
                ¡Además recibirás una insignia
                <br />
                acorde al plan seleccionado!
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button size="small">Comprar Pack</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275, marginTop: '10px', marginRight: '10px', transition: '0.3s', '&:hover': { background: '#CFF6FF', transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pack de puntos Avanzado
              </Typography>
              <Typography variant="h5" component="div">
                300 Puntos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                para canjear en la tienda
              </Typography>
              <Typography variant="h6" component="div">
                A sólo <strong>$500</strong>
              </Typography>
              <Typography variant="body2">
                ¡Además recibirás una insignia
                <br />
                acorde al plan seleccionado!
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button size="small">Comprar Pack</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275, marginTop: '10px', marginRight: '10px', transition: '0.3s', '&:hover': { background: '#CFF6FF', transform: 'scale(1.05)' } }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pack de puntos Premium
              </Typography>
              <Typography variant="h5" component="div">
                600 Puntos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                para canjear en la tienda
              </Typography>
              <Typography variant="h6" component="div">
                A sólo <strong>$700</strong>
              </Typography>
              <Typography variant="body2">
                ¡Además recibirás una insignia
                <br />
                acorde al plan seleccionado!
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button size="small">Comprar Pack</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275, marginTop: '10px', transition: '0.3s', '&:hover': { background: '#CFF6FF', transform: 'scale(1.05)' } }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pack de puntos Élite
              </Typography>
              <Typography variant="h5" component="div">
                1000 Puntos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                para canjear en la tienda
              </Typography>
              <Typography variant="h6" component="div">
                A sólo <strong>$1100</strong>
              </Typography>
              <Typography variant="body2">
                ¡Además recibirás una insignia
                <br />
                acorde al plan seleccionado!
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <Button size="small">Comprar Pack</Button>
            </CardActions>
          </Card>
          <Typography variant="h5" sx={{ marginTop: '30px', padding: '30px', background: '#DAF5FC', border: 'solid 1px #95EBFF', borderRadius: '10px' }}>Todas las operaciones se realizan a través de <img src="https://ketekipo.com.ar/wp-content/uploads/2020/05/mercado-pago.png" width="100px" alt="logo-mercadopago" /></Typography>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
