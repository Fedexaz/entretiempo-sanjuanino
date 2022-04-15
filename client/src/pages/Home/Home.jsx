import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMatches } from '../../services/data.service';
import { sortByFecha } from '../../utils/matches.utils';
import Footer from '../../components/Footer/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Match from '../../components/Home/Match';

export default function Home({ logged }) {
  const goto = useNavigate();
  const [matches, setMatches] = useState([]);

  const loadData = async () => {
    setMatches(await getAllMatches());
  };

  useEffect(() => {
    loadData();
    return () => {
      setMatches([]);
    };
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
        <CardActions sx={{ float: 'right'}}>
          <Button size="small">Ver todas las noticias</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, margin: '10px' }}>
        <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
          Últimos 4 partidos cargados
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            matches.length ?
              matches.slice(0, 4).map((m) => m.jugado ? null : <Match key={m._id} data={m} />)
              :
              <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                No hay partidos
              </Typography>
          }
        </Box>
        <CardActions sx={{ float: 'right'}}>
          <Button size="small" onClick={() => goto('/partidos')}>Ver todos los partidos</Button>
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
              <CardActions sx={{ float: 'right'}}>
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
