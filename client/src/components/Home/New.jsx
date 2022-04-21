import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

export default function New({ data }) {
  const goto = useNavigate();

  const { _id, titulo, descripcion, hechaPor, likes, comments, createdAt } = data;

  return (
    <Card sx={{ maxWidth: 350, m: 1, boxShadow: 3, border: 'solid 1px #B7C8AA', transition: '0.3s', '&:hover': { transform: 'scale(1.01)', cursor: 'pointer' } }} onClick={() => goto(`/noticia/${_id}`)}>
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
        alt={hechaPor}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            {createdAt}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="body2" color="text.secondary" title={`${comments[0] ? comments[0] : 0} ${comments[0] ? comments[0] === 1 ? 'comentario' : 'comentarios' : 'comentarios'}`}>
              {comments[0] ? comments[0] : 0} <CommentIcon sx={{ fontSize: '14px' }} />
            </Typography>
            &nbsp;
            <Typography variant="body2" color="text.secondary" title={`${likes.length} ${likes.length === 1 ? 'reacción' : 'reacciones'}`}>
              {likes.length} <ThumbUpIcon sx={{ fontSize: '14px' }} />
            </Typography>
          </Box>
        </Box>
        <Typography gutterBottom variant="h6" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion.slice(0, 70)}...
        </Typography>
      </CardContent>
    </Card>
  );
}
