import React, { useState, useEffect } from 'react';

import Noticia from '../../components/Noticias/Noticia';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';
import { useAxiosPrivate } from '../../auth/useAxiosPrivate';
import { getNews } from '../../services/news.service';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Noticias() {
  const axios = useAxiosPrivate();
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => document.title = 'Noticias - Entretiempo de San Juan');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setNews(await getNews(axios));
    setLoadingNews(false);
  };

  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', borderRadius: '5px', padding: '15px', margin: '15px' }}>
        <Typography variant='h4' sx={{ my: 2 }}>
          Noticias de Entretiempo de San Juan
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          {
            loadingNews ?
              <Typography variant='h4'>
                Cargando noticias :/
              </Typography>
              :
              !news.length ?
                <Typography variant='h4'>
                  No hay noticias que mostrar :(
                </Typography>
                :
                news.map(noti => <Noticia key={noti._id} data={noti} /> )
          }
        </Box>
      </Box>
      <Footer />
    </>
  )
}
