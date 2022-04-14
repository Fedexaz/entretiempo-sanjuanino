import React, { useEffect, useState } from 'react';
import { getAllMatches } from '../../services/data.service';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

export default function Matches() {
  useEffect(() => document.title = 'Partidos - Entretiempo Sanjuanino');

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
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h5'>
          Todos los partidos
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
        <Card sx={{ margin: '5px', maxWidth: '300px' }}>
          <CardHeader title="Últimos partidos" />
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam corporis exercitationem! Atque quae eligendi quibusdam similique. Atque beatae suscipit esse molestiae sint, autem ut facilis. Nisi optio sunt adipisci!
          </CardContent>
        </Card>
        <Card sx={{ margin: '5px', maxWidth: '650px' }}>
          <CardHeader title="Todos los partidos" />
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum, unde doloremque vitae illum soluta voluptatibus porro odit impedit reiciendis officia facilis ut ipsum tempora nihil, voluptate obcaecati incidunt possimus!
          </CardContent>
        </Card>
        <Card sx={{ margin: '5px', maxWidth: '300px' }}>
          <CardHeader title="Partidos el día de hoy" />
          <CardContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolore animi et temporibus doloremque aspernatur, eos molestias hic? Similique odit in, rerum necessitatibus a consequuntur vel libero provident saepe optio.
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  )
}