import React, { useState, useEffect } from 'react';
import { findByFecha, sortByFecha, sortByComentarios, sortByReacciones, sortByName } from '../../utils/news.utils';
import Noticia from '../../components/Noticias/Noticia';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';
import { useAxiosPrivate } from '../../auth/useAxiosPrivate';
import { getNews } from '../../services/news.service';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import LoaderMain from '../../components/Loaders/LoaderMain';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import fechaCorrecta from 'date-fns/locale/es';

export default function Noticias() {
  const axios = useAxiosPrivate();
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState([]);
  const [newsBackup, setNewsBackup] = useState([]);

  const [ordenPorFecha, setOrdenPorFecha] = useState('');
  const [ordenPorReacciones, setOrdenPorReacciones] = useState('');
  const [ordenPorComentarios, setOrdenPorComentarios] = useState('');
  const [ordenPorNombre, setOrdenPorNombre] = useState('');
  const [filtroPorFecha, setFiltroPorFecha] = useState(new Date());

  useEffect(() => document.title = 'Noticias - Entretiempo de San Juan');

  useEffect(() => {
    loadData();
    return () => {
      setNews([]);
      setNewsBackup([]);
      setLoadingNews(true);
    };
  }, []);

  const loadData = async () => {
    setNews(await getNews(axios));
    setNewsBackup(await getNews(axios));
    setLoadingNews(false);
  };

  const handleOrdenPorFecha = (e) => {
    setOrdenPorFecha(e.target.value);
    const data = sortByFecha(news, e.target.value);
    setNews(data);
  };

  const handleOrdenPorReacciones = (e) => {
    setOrdenPorReacciones(e.target.value);
    const data = sortByReacciones(news, e.target.value);
    setNews(data);
  };

  const handleOrdenPorComentarios = (e) => {
    setOrdenPorComentarios(e.target.value);
    const data = sortByComentarios(news, e.target.value);
    setNews(data);
  };

  const handleOrdenPorNombre = (e) => {
    setOrdenPorNombre(e.target.value);
    const data = sortByName(news, e.target.value);
    setNews(data);
  };

  const handleFiltroPorFecha = valor => {
    setFiltroPorFecha(valor);
    const data = findByFecha(newsBackup, valor);
    setNews(data);
  };

  const handleReset = () => {
    setNews([...newsBackup]);
    setOrdenPorFecha('');
    setOrdenPorComentarios('');
    setOrdenPorReacciones('');
    setOrdenPorNombre('');
    setFiltroPorFecha(new Date());
  };

  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', boxShadow: 4, flexDirection: 'column', background: 'white', borderRadius: '5px', padding: '15px', margin: '15px' }}>
        <Typography variant='h4' sx={{ my: 2, textAlign: 'center' }}>
          Noticias de Entretiempo de San Juan
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, minWidth: 180, width: '400px' }}>
            <Typography>Buscar una noticia</Typography>
            <TextField
              label="Ingresa una palabra a buscar"
              value={ordenPorNombre}
              onChange={handleOrdenPorNombre}
              placeholder='Ingresa una palabra a buscar'
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, minWidth: 180, width: 200 }}>
            <Typography>Ordenar por fecha</Typography>
            <Select
              value={ordenPorFecha}
              onChange={handleOrdenPorFecha}
              displayEmpty
              inputProps={{ 'aria-label': 'Ordenar por Fecha' }}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value={1}>Más nuevas</MenuItem>
              <MenuItem value={2}>Más antiguas</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180, width: 200 }}>
            <Typography>Ordenar por reacciones</Typography>
            <Select
              value={ordenPorReacciones}
              onChange={handleOrdenPorReacciones}
              displayEmpty
              inputProps={{ 'aria-label': 'Ordenar por Fecha' }}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value={1}>Más reaccionadas</MenuItem>
              <MenuItem value={2}>Menos reaccionadas</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180, width: 200 }}>
            <Typography>Ordenar por comentarios</Typography>
            <Select
              value={ordenPorComentarios}
              onChange={handleOrdenPorComentarios}
              displayEmpty
              inputProps={{ 'aria-label': 'Ordenar por Fecha' }}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value={1}>Más comentadas</MenuItem>
              <MenuItem value={2}>Menos comentadas</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <Typography>Filtrar por fecha</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={fechaCorrecta}>
              <DatePicker
                value={filtroPorFecha}
                onChange={handleFiltroPorFecha}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <Box>
            <Button sx={{ marginTop: '37px' }} size='large' variant='contained' onClick={handleReset}>Limpiar filtros</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {
            loadingNews ?
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <LoaderMain />
                <Typography sx={{ textAlign: 'center' }}>
                  Cargando noticias...
                </Typography>
              </Box>
              :
              !news.length ?
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant='h5'>
                    No hay noticias que mostrar :(
                  </Typography>
                  <Button sx={{ marginTop: '10px' }} size='large' variant='contained' onClick={handleReset}>Recargar noticias</Button>
                </Box>
                :
                news.map(noti => <Noticia key={noti._id} data={noti} />)
          }
        </Box>
      </Box>
      <Footer />
    </>
  )
}
