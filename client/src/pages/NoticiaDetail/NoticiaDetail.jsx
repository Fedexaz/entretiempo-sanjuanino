import React, { useEffect, useState } from 'react';
import { getNew, getNewComments, addNewComment } from '../../services/news.service';
import { useParams, useNavigate } from 'react-router-dom';

import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';
import LoaderMain from '../../components/Loaders/LoaderMain';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export default function NoticiaDetail() {
  const { id } = useParams();
  const goto = useNavigate();

  const [nuevoComentario, setNuevoComentario] = useState('');

  const [noticia, setNoticia] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [cargandoComentarios, setCargandoComentarios] = useState(true);

  useEffect(() => document.title = noticia.titulo ? noticia.titulo.slice(0, 20) + " - Entretiempo de San Juan" : "Noticia - Entretiempo de San Juan", [noticia]);

  useEffect(() => {
    loadData();
    loadComments();
    return () => {
      setNoticia({});
      setComentarios([]);
      setCargando(true);
      setCargandoComentarios(true);
    };
  }, []);

  const loadComments = async () => {
    setComentarios(await getNewComments(id));
    setCargandoComentarios(false);
  };

  const loadData = async () => {
    setNoticia(await getNew(id));
    setCargando(false);
  };

  const handleChange = (e) => {
    setNuevoComentario(e.target.value);
  };

  const enviarComentario = async () => {
    if(nuevoComentario.length) {
      setNuevoComentario('');
      const respuesta = await addNewComment(id, nuevoComentario);
      if(respuesta) {
        console.log('Comentario agregado!');
        loadComments(id);
      }
      else {
        console.log('Error al agregar comentario');
      }
    }
    else {
      console.log('El comentario no puede estar vacio!');
    }
  };

  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', background: 'white', margin: '10px', borderRadius: '5px' }}>
        {
          !cargando ?
            noticia._id ?
              <Box>
                {
                  noticia.img === 'no-image' ?
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" width='100%' alt="noticia sin imagen" />
                    :
                    <img src={noticia.img} width='100%' alt={noticia.titulo} />
                }
                <Box sx={{ marginTop: '20px', marginLeft: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant='h4'>
                      {noticia.titulo}
                    </Typography>
                    <Typography>
                      Por <strong>{noticia.hechaPor}</strong>, el <strong>{noticia.createdAt}</strong>
                    </Typography>
                  </Box>
                  <Button sx={{ marginTop: '10px' }}>
                    <ThumbUpOutlinedIcon sx={{ fontSize: '20px' }}/>&nbsp;
                    <Typography>
                      {noticia.likes.length}
                    </Typography>
                  </Button>
                </Box>
                <Typography variant='body1' sx={{ padding: '20px' }}>
                  {noticia.descripcion}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                  <Typography variant='h6'>
                    Comentarios ({comentarios.length ? comentarios.length : '0'})
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                      !cargandoComentarios ?
                        comentarios.length ?
                          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
                            {
                              comentarios?.map(comentario => {
                                return (
                                  <Box key={comentario._id} sx={{ border: 'solid 1px #9CB3FE', background: '#DAE3FF', borderRadius: '5px', padding: '15px', marginTop: '10px' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                      <Typography>
                                        <strong>{comentario.usuario}</strong>
                                      </Typography>
                                      <Button size='small'>
                                        <ThumbUpOutlinedIcon sx={{ fontSize: '14px' }}/>&nbsp;
                                        <Typography sx={{ fontSize: '16px' }}>
                                          {noticia.likes.length}
                                        </Typography>
                                      </Button>
                                    </Box>
                                    <Typography variant='body1'>
                                      {comentario.comentario}
                                    </Typography>
                                  </Box>
                                )
                              })
                            }
                          </Box>
                          :
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px' }}>
                            <Typography variant='h6'>
                              Aún no hay comentarios, <strong>¡Sé el primero en comentar!</strong>
                            </Typography>
                          </Box>
                        :
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px' }}>
                          <LoaderMain />
                          <Typography variant='h5'>Cargando comentarios...</Typography>
                        </Box>
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '5px', margin: '20px' }}>
                      <Typography sx={{ marginBottom: '10px' }}>Escribe un comentario:</Typography>
                      <TextField
                        id="comentario"
                        label="Comentario"
                        multiline
                        onChange={handleChange}
                        value={nuevoComentario}
                        rows={3}
                        placeholder="Escribe tu comentario aquí"
                      />
                      <Button variant='contained' sx={{ marginTop: '10px' }} onClick={enviarComentario}>Comentar noticia</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              :
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px' }}>
                <Typography variant='h5'>La noticia que buscas no existe :(</Typography>
                <Button onClick={() => goto('/noticias')} variant='contained' sx={{ marginTop: '15px' }}>Ver todas las noticias</Button>
              </Box>
            :
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px' }}>
              <LoaderMain />
              <Typography variant='h5'>Cargando noticia...</Typography>
            </Box>
        }
      </Box>
      <Footer />
    </>
  )
}
