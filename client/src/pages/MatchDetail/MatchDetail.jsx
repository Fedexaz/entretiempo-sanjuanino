import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMatch } from '../../services/data.service';
import { timeLeft, seHaJugado } from '../../utils/time.utils';

import HomeMobile from '../Home/HomeMobile';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export default function MatchDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    loadMatch();
    return () => {
      setMatch({});
    };
  }, []);

  const loadMatch = async () => {
    setMatch(await getMatch(id));
    setLoaded(true);
  };

  return (
    <>
      <HomeMobile />
      <Fade in={loaded} unmountOnExit>
        <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h3'>Detalles del partido</Typography>
          <Card sx={{ padding: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h5'>
              <img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamLocal).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='60' alt={match.teamLocal} />{match.teamLocal} vs {match.teamVisitante}<img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamVisitante).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='60' alt={match.teamVisitante} />
            </Typography>
            {
              match.jugado ?
                <Typography variant='h3' sx={{ margin: '20px' }}>
                  {match.golesLocal} - {match.golesVisitante}
                </Typography>
                :
                <Alert severity='warning' sx={{ margin: '20px' }}>
                  <AlertTitle>
                    <Typography>
                      Estado
                    </Typography>
                  </AlertTitle>
                  <Typography variant='h6'>
                    <strong>Se {seHaJugado(match.fechaJuego) ? 'juega' : 'jugó'} {timeLeft(match.fechaJuego)}.</strong>
                  </Typography>
                </Alert>
            }
            <Card sx={{ padding: '15px', margin: '10px' }}>
              <Typography variant='subtitle1'>Fecha: {match.fechaJuego}</Typography>
            </Card>
          </Card>
        </Box>
      </Fade>
    </>
  )
}