import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="Primera página"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="Página anterior"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Siguiente página"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Última página"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function Match({ matches }) {
  const goto = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - matches.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="ppartidos">
        <TableBody>
          {(rowsPerPage > 0
            ? matches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : matches
          ).map((match) => (
            <TableRow key={match._id} hover onClick={() => goto(`/partido/${match._id}?key=fede`)} sx={{ '&:hover': { cursor: 'pointer' } }}>
              <TableCell component="th" scope="row">
                <Typography><strong>{match.fechaJuego}</strong></Typography>
              </TableCell>
              <TableCell style={{ width: 300 }} align="right">
                <Typography>
                  {match.teamLocal} {match.jugado ? <strong>({match.golesLocal})</strong> : null}
                  <img title={match.teamLocal} src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamLocal).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='40' alt={match.teamLocal} />
                </Typography>
              </TableCell>
              <TableCell style={{ width: 300 }} align="left">
                <Typography>
                  <img title={match.teamVisitante} src={`https://firebasestorage.googleapis.com/v0/b/entretiempo-img.appspot.com/o/${String(match.teamVisitante).replaceAll(' ', '-').toLowerCase()}.png?alt=media&token=400a2246-623d-4047-8295-ba236ae1cc3b`} width='40' alt={match.teamVisitante} />
                  {match.teamVisitante} {match.jugado ? <strong>({match.golesVisitante})</strong> : null}
                </Typography>
              </TableCell>
              <TableCell style={{ width: 200 }} align="right">
                {match.cancha}
              </TableCell>
              <TableCell style={{ width: 130 }} align="right">
                <strong>{match.jugado ? 'Jugado' : 'No jugado'}</strong>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              labelRowsPerPage='Partidos por página'
              rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
              colSpan={3}
              count={matches.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'filas por página',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}