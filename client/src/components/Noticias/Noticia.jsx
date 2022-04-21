import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

export default function Noticia({ data }) {
  const { _id, titulo, descripcion, createdAt, hechaPor, likes, comments, img } = data;

  const goto = useNavigate();

  return (
    <Box onClick={() => goto(`/noticia/${_id}`)} sx={{ boxShadow: 3, padding: '10px', my: 1, width: '100%', borderRadius: '5px', transition: '.4s', '&:hover': { cursor: 'pointer', background: '#D0DBFE', transform: 'scale(1.003)' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img style={{ borderRadius: '5px' }} src={img === 'no-image' ? "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" : img} width='230px' alt={titulo} />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
          <Typography variant='h6'>{titulo}</Typography>
          <Typography sx={{ fontSize: '15px' }}>{descripcion.slice(0, 150)}...</Typography>
          <Typography sx={{ fontSize: '11px' }}>Por <strong>{hechaPor}</strong></Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '15px' }}><strong>{createdAt}</strong></Typography>
          <Typography variant="body2" color="text.secondary" title={`${comments[0] ? comments[0] : 0} ${comments[0] ? comments[0] === 1 ? 'comentario' : 'comentarios' : 'comentarios'} y ${likes.length} ${likes.length === 1 ? 'reacción' : 'reacciones'}`}>
            {comments[0] ? comments[0] : 0} <CommentIcon sx={{ fontSize: '14px' }} />
            &nbsp;
            {likes.length} <ThumbUpIcon sx={{ fontSize: '14px' }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
