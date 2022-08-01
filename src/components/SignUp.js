import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate } from 'react-router-dom';
import{useState} from "react";
import { auth } from '../conn';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';
import { Icon } from '@mui/material';
const theme = createTheme();

export default function SignUp() {

const[email,setEmail] = useState("");
const[pass,setPass] = useState("");
const history = useNavigate();
const register =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,pass).then((useCredential)=>{
        console.log(useCredential);
        if(useCredential){
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1500
              })
            history('/')
        }
    }).catch(err=>{Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales incorrectas',
      })})
}
 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' ,marginTop: 20}}>
            <Icon>account_circle</Icon>
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Ingrese Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Ingrese Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  id="email"
                  label="Ingrese Correo"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={pass}
                  onChange={e=>setPass(e.target.value)}
                  name="password"
                  label="Ingrese Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={register}
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <div className='linkRegistro'>
                <Link to='/login'>
                  Ya tienes una cuenta? Logeate
                </Link>
                </div>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}