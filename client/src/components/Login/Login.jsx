import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import decoder from 'jwt-decode';
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

export default function Login() {
  
  useEffect(() => document.title = 'Iniciar sesión - Entretiempo Sanjuanino', []);

  const goto = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/user/login", values);

        localStorage.setItem("token", response.data.data);        
        localStorage.setItem("loggedIn", true);        
        localStorage.setItem("data", JSON.stringify(decoder(response.data.data)));
        goto("/");
      } catch (e) {
        console.log(e.response.data.message);
      }
    },
  });

  return (
    <div>
       <AppBar position="fixed">
        <Toolbar>
          <Typography onClick={() => goto('/')} variant="h6" noWrap component="a" sx={{ '&:hover': { cursor: 'pointer' }}}>
            Entretiempo Sanjuanino
          </Typography>
        </Toolbar>
      </AppBar>
      <Container size='xl' sx={{ marginTop: '70px', marginBottom: '60px'}}>
        <Box className='center-completo'>
          <Box sx={{ margin: '30px' }}>
            <Typography variant='h5'>Inicia sesión en</Typography>
            <Typography variant='h3'>Entretiempo</Typography>
            <Typography variant='body2' maxWidth={300}>¿No tienes cuenta? <Button size='small' onClick={() => goto('/registro')}>Regístrate</Button></Typography>
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
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
                Iniciar sesión
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}
