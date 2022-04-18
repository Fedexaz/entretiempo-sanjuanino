import React, { useEffect, useState } from 'react';
import { getAllMatches } from '../../services/data.service';
import { findByCancha, findByEvento, findByFecha, findByLocalName, findByState, findByVisitantelName, showToday, sortByCancha, sortByEvento, sortByFecha, sortByGolesLocal, sortByGolesVisitante, sortByLocalName, sortByState, sortByVisitanteName } from '../../utils/matches.utils';
import HomeMobile from '../Home/HomeMobile';
import Footer from '../../components/Footer/Footer';
import Match from '../../components/Matches/Match';
import AllMatches from '../../components/Matches/AllMatches';
import LoaderMain from '../../components/Loaders/LoaderMain';
import List from '@mui/material/List';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import fechaCorrecta from 'date-fns/locale/es';

export default function Matches() {
  useEffect(() => document.title = 'Partidos - Entretiempo Sanjuanino');

  const [loadingMatches, setLoadingMatches] = useState(true);
  const [matches, setMatches] = useState([]);
  const [matchesBackup, setMatchesBackup] = useState([]);
  const [open, setOpen] = useState(false);

  const [ordenPorFecha, setOrdenPorFecha] = useState('');
  const [ordenPorNombreLocal, setOrdenPorNombreLocal] = useState('');
  const [ordenPorNombreVisitante, setOrdenPorNombreVisitante] = useState('');
  const [ordenPorCancha, setOrdenPorCancha] = useState('');
  const [ordenPorEstado, setOrdenPorEstado] = useState('');
  const [ordenPorGolesLocal, setOrdenPorGolesLocal] = useState('');
  const [ordenPorGolesVisitante, setOrdenPorGolesVisitante] = useState('');
  const [ordenPorEvento, setOrdenPorEvento] = useState('');

  const [filtrarPorNombreLocal, setFiltrarPorNombreLocal] = useState('');
  const [filtrarPorNombreVisitante, setFiltrarPorNombreVisitante] = useState('');
  const [filtrarPorCancha, setFiltrarPorCancha] = useState('');
  const [filtrarPorEstado, setFiltrarPorEstado] = useState('');
  const [filtrarPorFecha, setFiltrarPorFecha] = useState(new Date());
  const [filtrarPorEvento, setFiltrarPorEvento] = useState('');

  const loadData = async () => {
    setMatches(await getAllMatches());
    setMatchesBackup(await getAllMatches());
    setLoadingMatches(false);
  };

  useEffect(() => {
    loadData();
    return () => {
      setMatches([]);
      setMatchesBackup([]);
      setLoadingMatches(false);
    };
  }, []);

  const handleOrdenPorFecha = (e) => {
    setOrdenPorFecha(e.target.value);
    const data = sortByFecha(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorNombreLocal = (e) => {
    setOrdenPorNombreLocal(e.target.value);
    const data = sortByLocalName(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorNombreVisitante = (e) => {
    setOrdenPorNombreVisitante(e.target.value);
    const data = sortByVisitanteName(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorCancha = (e) => {
    setOrdenPorCancha(e.target.value);
    const data = sortByCancha(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorEstado = (e) => {
    setOrdenPorEstado(e.target.value);
    const data = sortByState(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorGolesLocal = (e) => {
    setOrdenPorGolesLocal(e.target.value);
    const data = sortByGolesLocal(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorGolesVisitante = (e) => {
    setOrdenPorGolesVisitante(e.target.value);
    const data = sortByGolesVisitante(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleOrdenPorEvento = (e) => {
    setOrdenPorEvento(e.target.value);
    const data = sortByEvento(matches, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleFiltrarPorNombreLocal = (e) => {
    setFiltrarPorNombreLocal(e.target.value);
    const data = findByLocalName(matchesBackup, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleFiltrarPorNombreVisitante = (e) => {
    setFiltrarPorNombreVisitante(e.target.value);
    const data = findByVisitantelName(matchesBackup, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleFiltrarPorCancha = (e) => {
    setFiltrarPorCancha(e.target.value);
    const data = findByCancha(matchesBackup, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleFiltrarPorEstado = (e) => {
    setFiltrarPorEstado(e.target.value);
    const data = findByState(matchesBackup, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleFiltrarPorFecha = valor => {
    setFiltrarPorFecha(valor);
    const data = findByFecha(matchesBackup, valor);
    setMatches(data);
  };

  const handleFiltrarPorEvento = (e) => {
    setFiltrarPorEvento(e.target.value);
    const data = findByEvento(matchesBackup, e.target.value);
    setMatches(data);
    setOpen(!open);
  };

  const handleReset = () => {
    setMatches([...matchesBackup]);
    setOpen(!open);
    setOrdenPorFecha('');
    setOrdenPorNombreLocal('');
    setOrdenPorNombreVisitante('');
    setOrdenPorCancha('');
    setOrdenPorEstado('');
    setOrdenPorGolesLocal('');
    setOrdenPorGolesVisitante('');
    setOrdenPorEvento('');
    setFiltrarPorNombreLocal('');
    setFiltrarPorNombreVisitante('');
    setFiltrarPorCancha('');
    setFiltrarPorEstado('');
    setFiltrarPorFecha(new Date());
    setFiltrarPorEvento('');
  };

  return (
    <>
      <HomeMobile />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h5'>
          Todos los partidos
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ margin: '5px', width: '900px', '@media screen and (max-width: 900px)': { width: '98vw' } }}>
            <Accordion expanded={open}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setOpen(!open)}
              >
                <Typography variant='h6' sx={{ padding: '7px' }}>
                  Buscar o filtrar partidos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
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
                    <MenuItem value={1}>Menor a mayor</MenuItem>
                    <MenuItem value={2}>Mayor a menor</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por nombre local</Typography>
                  <Select
                    value={ordenPorNombreLocal}
                    onChange={handleOrdenPorNombreLocal}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por nombre local' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>A - Z</MenuItem>
                    <MenuItem value={2}>Z - A</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por nombre visitante</Typography>
                  <Select
                    value={ordenPorNombreVisitante}
                    onChange={handleOrdenPorNombreVisitante}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por nombre visitante' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>A - Z</MenuItem>
                    <MenuItem value={2}>Z - A</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por cancha</Typography>
                  <Select
                    value={ordenPorCancha}
                    onChange={handleOrdenPorCancha}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por cancha' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>A - Z</MenuItem>
                    <MenuItem value={2}>Z - A</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por estado</Typography>
                  <Select
                    value={ordenPorEstado}
                    onChange={handleOrdenPorEstado}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por estado' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>Jugado a No jugado</MenuItem>
                    <MenuItem value={2}>No jugado a Jugado</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por goles locales</Typography>
                  <Select
                    value={ordenPorGolesLocal}
                    onChange={handleOrdenPorGolesLocal}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por goles locales' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>Menor a mayor</MenuItem>
                    <MenuItem value={2}>Mayor a menor</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por goles visitante</Typography>
                  <Select
                    value={ordenPorGolesVisitante}
                    onChange={handleOrdenPorGolesVisitante}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por goles visitante' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>Menor a mayor</MenuItem>
                    <MenuItem value={2}>Mayor a menor</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Ordenar por evento</Typography>
                  <Select
                    value={ordenPorEvento}
                    onChange={handleOrdenPorEvento}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Ordenar por evento' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={1}>A - Z</MenuItem>
                    <MenuItem value={2}>Z - A</MenuItem>
                  </Select>
                </FormControl>
                <hr />
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por evento</Typography>
                  <Select
                    value={filtrarPorEvento}
                    onChange={handleFiltrarPorEvento}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filtrar por evento' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value='Liguilla'>Liguilla</MenuItem>
                    <MenuItem value='Liga Sanjuanina de Fútbol'>Liga Sanjuanina de Fútbol</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por Nombre Local</Typography>
                  <Select
                    value={filtrarPorNombreLocal}
                    onChange={handleFiltrarPorNombreLocal}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filtrar por nombre local' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value='San Martin'>San Martin</MenuItem>
                    <MenuItem value='Desamparados'>Desamparados</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por nombre visitante</Typography>
                  <Select
                    value={filtrarPorNombreVisitante}
                    onChange={handleFiltrarPorNombreVisitante}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filtrar por nombre visitante' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value='Zondina'>Zondina</MenuItem>
                    <MenuItem value='Desamparados'>Desamparados</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por cancha</Typography>
                  <Select
                    value={filtrarPorCancha}
                    onChange={handleFiltrarPorCancha}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filtrar por cancha' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value='Cancha de San Martin'>Cancha de San Martin</MenuItem>
                    <MenuItem value='Cancha de Trinidad'>Cancha de Trinidad</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por Estado</Typography>
                  <Select
                    value={filtrarPorEstado}
                    onChange={handleFiltrarPorEstado}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Filtrar por jugado' }}
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value={true}>Jugado</MenuItem>
                    <MenuItem value={false}>No Jugado</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <Typography>Filtrar por fecha</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns} locale={fechaCorrecta}>
                    <DatePicker
                      value={filtrarPorFecha}
                      onChange={handleFiltrarPorFecha}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
                <Button sx={{ marginTop: '37px' }} size='large' variant='contained' onClick={handleReset}>Limpiar filtros</Button>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Card sx={{ margin: '5px', width: '900px', border: '1px solid #AAD6FF', '@media screen and (max-width: 900px)': { width: '98vw' } }}>
            <Typography sx={{ fontSize: '20px', padding: '10px', paddingLeft: '20px' }}>Todos los partidos</Typography>
            <CardContent>
              <List dense>
                {
                  loadingMatches ?
                    <Typography sx={{ textAlign: 'center' }}>
                      <LoaderMain />
                      <br />
                      Cargando partidos...
                    </Typography>
                    :
                    matches.length ?
                      <AllMatches matches={matches} />
                      :
                      <Alert severity='info'>No hay nada que mostrar :/</Alert>
                }
              </List>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ margin: '5px', border: '1px solid #AAD6FF', '@media screen and (max-width: 900px)': { width: '98vw' }, '@media screen and (min-width: 900px)': { maxWidth: '400px' } }}>
            <Typography sx={{ fontSize: '20px', padding: '10px', paddingLeft: '20px' }}>Partidos de Hoy ({new Date().toLocaleDateString()})</Typography>
            <CardContent>
              <List dense>
                {
                  loadingMatches ?
                    <Typography sx={{ textAlign: 'center' }}>
                      <LoaderMain />
                      <br />
                      Cargando partidos...
                    </Typography>
                    :
                    sortByFecha(showToday(matchesBackup)).length ?
                      sortByFecha(showToday(matchesBackup)).map(m => <Match key={m._id} data={m} principal={false} />)
                      :
                      <Alert severity='info'>Hoy no hay partidos</Alert>
                }
              </List>
            </CardContent>
          </Card>
          <Card sx={{ margin: '5px', border: '1px solid #AAD6FF', '@media screen and (max-width: 900px)': { width: '98vw' }, '@media screen and (min-width: 900px)': { maxWidth: '400px' } }}>
            <Typography sx={{ fontSize: '20px', padding: '10px', paddingLeft: '20px' }}>Últimos partidos agregados</Typography>
            <CardContent>
              <List dense>
                {
                  loadingMatches ?
                    <Typography sx={{ textAlign: 'center' }}>
                      <LoaderMain />
                      <br />
                      Cargando partidos...
                    </Typography>
                    :
                    matchesBackup.length ?
                      matchesBackup.slice(0, 5).map(m => <Match key={m._id} principal={false} data={m} />)
                      :
                      <Alert severity='info'>No hay nada que mostrar :/</Alert>
                }
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  )
}