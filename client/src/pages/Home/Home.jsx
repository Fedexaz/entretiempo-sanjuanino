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
import BannerHome from '../../resources/images/bannerHome.jpg';
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
        <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid grey', justifyContent: 'flex-end', background: `url(${BannerHome})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '5px', borderRadius: '5px', height: '350px' }}>
          <Box sx={{ background: 'white', padding: '15px', opacity: '80%' }}>
          <Typography variant='h2'>
            Entretiempo de San Juan
          </Typography>
          <Typography variant='h5'>
            Todo el fútbol en una sóla página
          </Typography>
          </Box>
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
          <CardActions sx={{ float: 'right', padding: '10px' }}>
            <Button size="small" variant='contained' onClick={() => goto('/noticias')}>Ver todas las noticias</Button>
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
          <CardActions sx={{ float: 'right', padding: '10px' }}>
            <Button size="small" variant='contained' onClick={() => goto('/partidos')}>Ver todos los partidos</Button>
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
                <CardActions sx={{ float: 'right', padding: '10px' }}>
                  <Button size="small" variant='contained'>Ver todos los premios</Button>
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
