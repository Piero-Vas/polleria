import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, makeStyles } from '@mui/material';
import Icon from '@mui/material/Icon';
import logo from '../assets/kIkiTrans.png'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../conn';
import { actionTypes } from '../reducer';
import Swal from 'sweetalert2';
import '../styles/Header.scss'
export default function Navbar() {
  const [{pollos,user},dispatch] = useStateValue();
  const history = useNavigate();
  const [active,setActive] = React.useState(false);


    const showMenu = () => {
            setActive(!active)
    }
  const handleAuth =()=>{
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_POLLOS,
        pollos:[]
      })
      dispatch({
        type: actionTypes.SET_USER,
        user:null
      })
      Swal.fire({
        icon: 'success',
        title: 'Adios',
        showConfirmButton: false,
        timer: 1500
      })
      history('/')
    }
  }
  return (
    <Box sx={{ flexGrow: 1 , marginBottom:12, }} >
      <div className='header'>
      <AppBar position="fixed">
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <div className="header__logo">
        <Link to='/'>
          <IconButton>
            <img src={logo}
            height='100px'
            />
          </IconButton>
          </Link> 
          </div>
          <div>
          <ul>
            <div className="closed">
                <IconButton className='close' onClick={showMenu}>
                    <Icon>
                        Close
                    </Icon>
                </IconButton>
            </div>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/'>Acerca de mi</Link>
            </li>
            <li>
                <Link to='/'>Portfolio</Link>
            </li>
            <li>
                <Link to='/'>Paginas</Link>
            </li>
            <li>
                <Link to='/'>Contactame</Link>
            </li>
            <li>
              
            </li>
                </ul></div>
          <div className='ingreso'>
          <Typography variant='h6' color='textPrimary' component='p' >
            Holo {user?user.displayName||user.email:'Invitado'}
          </Typography>
          <Link to='/login'>
          <Button color="inherit" onClick={handleAuth}>{user?"Salir":"Ingresar"}</Button></Link>
          <Link to='checkout-page'>
          <IconButton color='inherit'>
            <Badge badgeContent={pollos?.length} color="secondary">
            <Icon >shopping_cart</Icon>
            </Badge>
          

          </IconButton>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </Box>
  );
}
