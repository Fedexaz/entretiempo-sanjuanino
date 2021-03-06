import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatch } from '../../services/data.service';
import { timeLeft, seHaJugado } from '../../utils/time.utils';
import '../../resources/css/loader.css';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useAxiosPrivate } from '../../auth/useAxiosPrivate';

export default function MatchDetail() {
  const axios = useAxiosPrivate();
  const goto = useNavigate();
  const { id } = useParams();
  const [match, setMatch] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => document.title = 'Detalles del partido - Entretiempo Sanjuanino');

  useEffect(() => {
    setLoaded(false);
    loadMatch();
    return () => {
      setMatch({});
    };
  }, []);

  const loadMatch = async () => {
    setMatch(await getMatch(axios, id));
    setLoaded(true);
  };

  return (
    <>
      <HomeMobile />
      <Box sx={{ marginLeft: '20px' }}>
        <Button variant='contained' onClick={() => goto('/partidos')}>Volver a partidos</Button>
      </Box>
      {
        match ?
          loaded ?
          <Fade in={loaded} unmountOnExit>
            <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Card sx={{ padding: '14px', paddingLeft: '65px', paddingRight: '65px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h3' sx={{ marginBottom: '20px'}}>Detalles del partido</Typography>
                <Typography variant='h5'>
                  <img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamLocal).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='60' alt={match.teamLocal} />{match.teamLocal} vs {match.teamVisitante}<img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamVisitante).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='60' alt={match.teamVisitante} />
                </Typography>
                {
                  match.jugado ?
                    <Typography variant='h3' sx={{ margin: '20px' }}>
                      {match.golesLocal} - {match.golesVisitante}
                    </Typography>
                    :
                    <>
                      <Alert severity='warning' sx={{ margin: '5px' }}>
                        <strong>Se {seHaJugado(match.fechaJuego) ? 'juega' : 'jug??'} {timeLeft(match.fechaJuego)}.</strong>
                      </Alert>
                      <Alert severity='info' sx={{ margin: '5px' }}>
                        <strong>Este partido se puede pronosticar.</strong>
                      </Alert>
                    </>
                }
                <Typography variant='h6'>Detalles del partido</Typography>
                <Card sx={{ padding: '25px', marginBottom: '10px', marginTop: '5px' }}>
                  <Typography variant='subtitle1'>Fecha: <strong>{match.fechaJuego}</strong></Typography>
                  <Typography variant='subtitle1'>Evento: <strong>{match.evento}</strong></Typography>
                  <Typography variant='subtitle1'>Provincia: <strong>{match.provincia}</strong></Typography>
                  <Typography variant='subtitle1'>Departamento: <strong>{match.departamento}</strong></Typography>
                  <Typography variant='subtitle1'>Cancha: <strong>{match.cancha}</strong></Typography>
                  <Typography variant='subtitle1'>Jugado: <strong>{match.jugado ? 'S??' : 'No'}</strong></Typography>
                  {
                    match.jugado ?
                      <>
                        <Typography variant='subtitle1'>Goles de {match.teamLocal}: <strong>{match.golesLocal}</strong></Typography>
                        <Typography variant='subtitle1'>Goles de {match.teamVisitante}: <strong>{match.golesVisitante}</strong></Typography>
                      </>
                      :
                      null
                  }
                  <Typography variant='subtitle1'>??Se puede pronosticar?: <strong>{match.jugado ? 'No' : 'S??'}</strong></Typography>
                </Card>
                {
                  !match.jugado ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px', background: '#D1E2FF', border: 'solid 1px #9BC1FF', padding: '30px', margin: '10px', borderRadius: '5px' }}>
                      <Typography variant='h6'>??Qui??n crees que ganar???</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={{ margin: '5px' }}>{match.teamLocal}</Button>
                        <Button variant='contained' sx={{ margin: '5px' }}>{match.teamVisitante}</Button>
                      </Box>
                    </Box>
                    :
                    null
                }
              </Card>
            </Box>
          </Fade>
          :
          <Typography variant='h4' sx={{ textAlign: 'center', background: 'white', padding: '20px', borderRadius: '5px', width: 'auto' }}>
            <SportsSoccerIcon sx={{ fontSize: '70px' }} className='loader' />
            <br />
            Cargando partido...
          </Typography>
          :
          <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <Typography variant='h4'>No se ha encontrado el partido :(</Typography>
          </Box>
      }
      <Footer />
    </>
  )
}