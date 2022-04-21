import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMatches } from '../../services/data.service';
import { getNews } from '../../services/news.service';
import Footer from '../../components/Footer/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Match from '../../components/Home/Match';
import New from '../../components/Home/New';
import LoaderMain from '../../components/Loaders/LoaderMain';
import { useAxiosPrivate } from '../../auth/useAxiosPrivate';

export default function Home({ logged }) {
  const goto = useNavigate();
  const axios = useAxiosPrivate();
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);

  const [loadingMatches, setLoadingMatches] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);

  const [loadingPronosticados, setLoadingPronosticados] = useState(true);
  const [loadingPremios, setLoadingPremios] = useState(true);
  const [loadingPronosticadores, setLoadingPronosticadores] = useState(true);

  const loadData = async () => {
    setMatches(await getAllMatches(axios));
    setNews(await getNews(axios));
    setLoadingMatches(false);
    setLoadingNews(false);
  };

  useEffect(() => {
    loadData();
    return () => {
      setMatches([]);
      setLoadingMatches(false);
    };
  }, []);

  return (
    <>
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
          <Typography sx={{ fontSize: 17, padding: '10px' }} gutterBottom>
            <strong>Últimas noticias</strong>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
              loadingNews ?
                <Typography sx={{ textAlign: 'center' }}>
                  <LoaderMain sx={{ transform: 'scale(3)' }} />
                  <br />
                  Cargando
                </Typography>
                :
                news.length ?
                  news.slice(0, 3).map((m) => <New key={m._id} data={m} />)
                  :
                  <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                    No hay Noticias
                  </Typography>
            }
          </Box>
          <CardActions sx={{ float: 'right' }}>
            <Button size="small" onClick={() => goto('/noticias')}>Ver todas las noticias</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, margin: '10px' }}>
          <Typography sx={{ fontSize: 17, padding: '10px' }} gutterBottom>
            <strong>Últimos partidos agregados</strong>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
              loadingMatches ?
                <Typography sx={{ textAlign: 'center' }}>
                  <LoaderMain sx={{ transform: 'scale(3)' }} />
                  <br />
                  Cargando
                </Typography>
                :
                matches.length ?
                  matches.slice(0, 4).map((m) => m.jugado ? null : <Match key={m._id} data={m} />)
                  :
                  <Typography sx={{ fontSize: 17, padding: '10px' }} color="text.secondary" gutterBottom>
                    No hay partidos
                  </Typography>
            }
          </Box>
          <CardActions sx={{ float: 'right' }}>
            <Button size="small" onClick={() => goto('/partidos')}>Ver todos los partidos</Button>
          </CardActions>
        </Card>
        {
          logged ?
            <>
              <Card sx={{ minWidth: 275, margin: '10px' }}>
                <Typography sx={{ fontSize: 17, padding: '10px' }} gutterBottom>
                  <strong>Partidos más pronosticados</strong>
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
                  {
                    loadingPronosticados ?
                      <Typography sx={{ textAlign: 'center' }}>
                        <LoaderMain sx={{ transform: 'scale(3)' }} />
                        <br />
                        Cargando
                      </Typography>
                      :
                      null
                  }
                </Box>
              </Card>
              <Card sx={{ minWidth: 275, margin: '10px' }}>
                <Typography sx={{ fontSize: 17, padding: '10px' }} gutterBottom>
                  <strong>Premios más canjeados</strong>
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {
                    loadingPremios ?
                      <Typography sx={{ textAlign: 'center' }}>
                        <LoaderMain sx={{ transform: 'scale(3)' }} />
                        <br />
                        Cargando
                      </Typography>
                      :
                      null
                  }
                </Box>
                <CardActions sx={{ float: 'right' }}>
                  <Button size="small">Ver todos los premios</Button>
                </CardActions>
              </Card>
              <Card sx={{ minWidth: 275, margin: '10px' }}>
                <Typography sx={{ fontSize: 17, padding: '10px' }} gutterBottom>
                  <strong>Top 5 mejores pronosticadores</strong>
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
                  {
                    loadingPronosticadores ?
                      <Typography sx={{ textAlign: 'center' }}>
                        <LoaderMain sx={{ transform: 'scale(3)' }} />
                        <br />
                        Cargando
                      </Typography>
                      :
                      null
                  }
                </Box>
              </Card>
            </>
            :
            null
        }
      </Box>
      <Footer />
    </>
  )
}
