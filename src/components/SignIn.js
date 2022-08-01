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
import {Link, useHistory, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, provider} from '../conn';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import { actionTypes } from '../reducer';
import '../styles/Header.scss'
const theme = createTheme();

export default function SignIn() {

  const[email,setEmail] = useState("");
  const[pass,setPass] = useState("");
  const history = useNavigate();
  const loginGoogle =()=>{
    signInWithPopup(auth,provider).then(result=>{
      console.log(result); 
      history('/')} )
    .catch(err=>console.log(err.message))
  }
  const login = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,pass).then((useCredential)=>{
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
    })
    .catch(err=>Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales incorrectas',
      }))
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' ,marginTop: 20,}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia Sesión
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={e=>setEmail(e.target.value)}
              id="email"
              label="Ingresa Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={pass}
              onChange={e=>setPass(e.target.value)}
              name="password"
              label="Ingresa Constraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              onClick={login}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia Sesión
            </Button>
            <Button
              fullWidth
              onClick={loginGoogle}
              variant="contained"
              sx={{ mb: 2 }}
            >
              Ingrese con Google
            </Button>
            <Grid container>
              <Grid item >
                <div className='linkRegistro'>                
                <Link to="/register" variant="body2">
                  {"No tienes una cuenta? Registrate"}
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