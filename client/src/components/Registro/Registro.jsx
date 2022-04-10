import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import { useFormik } from "formik";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from '../Footer/Footer';

const validationSchema = yup.object({
  userName: yup
    .string("Ingresa tu nombre de usuario")
    .min(2, "El nombre de usuario debe tener más de 2 caracteres")
    .max(16, "El nombre de usuario no debe tener más de 16 caracteres")
    .required("El nombre de usuario es requerido"),
  email: yup
    .string("Ingresa tu email")
    .email("Ingresa un email válido")
    .required("El email es requerido"),
  password: yup
    .string("Ingresa tu contraseña")
    .min(8, "La contraseña debe tener más de 8 caracteres")
    .max(28, "La contraseña no debe tener más de 28 caracteres")
    .required("La contraseña es requerida")
});

export default function Registro() {
  useEffect(() => document.title = 'Registro - Entretiempo Sanjuanino', []);
  
  const goto = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("/user/register", values);
        goto("/login");
      } catch (e) {
        console.log(e.response.data.message);
      }
    },
  });

  return (
    <div>
       <AppBar position="fixed">
        <Toolbar>
          <Typography onClick={() => goto('/')} variant="h6" noWrap sx={{ '&:hover': { cursor: 'pointer' }}}>
            Entretiempo Sanjuanino
          </Typography>
        </Toolbar>
      </AppBar>
      <Container size='xl' sx={{ marginTop: '40px', marginBottom: '60px'}}>
        <Box className='center-completo'>
          <Box sx={{ margin: '30px' }}>
            <Typography variant='h5'>Regístrate en</Typography>
            <Typography variant='h3'>Entretiempo</Typography>
            <Typography variant='body2' maxWidth={300}>En <strong>Entretiempo</strong> vamos a facilitarte la información del fútbol sanjuanino para que puedas tener un seguimiento de <u>tu equipo favorito</u>, <u>la tabla de posiciones</u>, <u>las ligas</u> y mucho más.</Typography>
            <Typography variant='body2' maxWidth={300}>¿Ya tienes cuenta? <Button size='small' onClick={() => goto('/login')}>Inicia sesión</Button></Typography>
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                sx={{ my: 1, width: "100%" }}
                id="userName"
                name="userName"
                label="Nombre de usuario"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName &&
                  Boolean(formik.errors.userName)
                }
                helperText={
                  formik.touched.userName &&
                  formik.errors.userName
                }
              />
              <TextField
                sx={{ my: 1, width: "100%" }}
                id="email"
                name="email"
                label="Ingresa tu email"
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.touched.email &&
                  Boolean(formik.errors.email)
                }
                helperText={
                  formik.touched.email &&
                  formik.errors.email
                }
              />
              <TextField
                sx={{ my: 1, width: "100%" }}
                id="password"
                name="password"
                type='password'
                label="Ingresa tu contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password &&
                  Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password &&
                  formik.errors.password
                }
              />
              <Button variant='contained' type='submit' sx={{ width: '100%'}}>
                Registrarme
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}
