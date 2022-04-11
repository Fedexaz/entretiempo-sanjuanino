import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home({ logged }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    (async function cargar() {
      try {
        const res = await axios.get(`/api/match/all?key=${process.env.REACT_APP_TOKEN_API_ENTRETIEMPO ? process.env.REACT_APP_TOKEN_API_ENTRETIEMPO : 'fede'}`);
        setMatches(res.data.data);
      } catch (error) {
        console.log(error.response.message);
      }
    })();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ background: '#E4F2FC', marginBottom: '20px', border: 'solid 1px #AEDAFC', padding: '20px', borderRadius: '5px' }}>
        <Typography variant='h2'>
          Entretiempo Sanjuanino
        </Typography>
        <Typography variant='h5'>
          Todo el fútbol en una sóla página
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
          {
            matches.length ?
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                Hay partidos
              </Typography>
              :
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                No hay partidos
              </Typography>
          }
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
