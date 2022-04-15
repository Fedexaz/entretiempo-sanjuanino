import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export default function Match({ data, principal }) {
  const goto = useNavigate();

  const { _id, teamLocal, teamVisitante, jugado, golesLocal, golesVisitante, fechaJuego } = data;

  return (
    <ListItem onClick={() => goto(`/partido/${_id}?key=fede`)} sx={{ fontSize: principal ? '17px' : '13px', background: !jugado ? '#CBF3B6' : '#FFE7CD', padding: '10px', border: '1px solid #D4D7DC', marginBottom: '3px', borderRadius: '5px', transition: '.3s', '&:hover': { background: '#CDDFFC', cursor: 'pointer' } }}>
      <Typography sx={{ marginRight: '10px' }}>
        <strong>
          {fechaJuego}
        </strong>
      </Typography>
      <img title={teamLocal} src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(teamLocal).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='30' alt={teamLocal} />
      {teamLocal} {jugado ? golesLocal : null} {jugado ? '-' : 'vs'} {jugado ? golesVisitante : null} {teamVisitante}
      <img title={teamVisitante} src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(teamVisitante).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='30' alt={teamVisitante} />
    </ListItem>
  )
}
