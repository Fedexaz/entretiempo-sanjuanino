import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Match({ data }) {
  const goto = useNavigate();

  const { _id, teamLocal, teamVisitante, provincia, departamento, cancha, fechaJuego, evento } = data;

  return (
    <Card sx={{ minWidth: 275, mx: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {fechaJuego}
        </Typography>
        <Typography color="HighlightText">
          <img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(teamLocal).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='30' alt={teamLocal} />{teamLocal} - {teamVisitante}<img src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(teamVisitante).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='30' alt={teamVisitante} />
        </Typography>
        <Typography variant="body2">
          Lugar: <strong>{departamento}, {provincia}</strong>
          <br />
          Evento: <strong>{evento}</strong>
          <br />
          Cancha: <strong>{cancha}</strong>
        </Typography>
        <CardActions sx={{ float: 'right' }}>
          <Button size="small" onClick={() => goto(`/partido/${_id}`)}>Ver detalles</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
