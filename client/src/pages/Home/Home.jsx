import React from 'react';
import Footer from '../../components/Footer/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home({ logged }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ background: '#E4F2FC', marginBottom: '20px', border: 'solid 1px #AEDAFC', padding: '20px', borderRadius: '5px' }}>
        <Typography variant='h2'>
          Entretiempo Sanjuanino
        </Typography>
        <Typography variant='h5'>
          Todo el fútbol en una sóla página
        </Typography>
        <Typography variant='body1' sx={{ maxWidth: '1000px' }}>
          Bienvenido a <strong>Entretiempo Sanjuanino</strong>, aquí podrás ver las estadísticas de los partidos del fútbol de San Juan en tiempo real y al alcance de tu PC o Celular. También podrás consultar las tablas de posiciones, los torneos ¡y si estás registrado en la plataforma tendrás beneficios exlusivos (<i>como los pronósticos, por ejemplo</i>)!
        </Typography>
      </Box>
      <Card sx={{ minWidth: 275, margin: '10px' }}>
        <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
          Últimas noticias
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          Renderizar las últimas noticias
        </Box>
        <CardActions>
          <Button size="small">Ver todas las noticias</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, margin: '10px' }}>
        <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
          Últimos 4 partidos
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          Renderizar los últimos 4 partidos
        </Box>
        <CardActions>
          <Button size="small">Ver todos los partidos</Button>
        </CardActions>
      </Card>
      {
        logged ?
          <>
            <Card sx={{ minWidth: 275, margin: '10px' }}>
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                Partidos más pronosticados
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                Renderizar partidos con más pronósticos
              </Box>
              <CardActions>
                <Button size="small">Ver todos los partidos a pronosticar</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '10px' }}>
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                Premios más canjeados
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                Renderizar los premios más canjeados
              </Box>
              <CardActions>
                <Button size="small">Ver todos los premios disponibles</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, margin: '10px' }}>
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                Top 5 mejores pronosticadores
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                Renderizar los 5 mejores pronosticadores
              </Box>
            </Card>
          </>
          :
          null
      }

      <Footer />
    </Box>
  )
}
