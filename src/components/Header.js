import { Close, FiberManualRecordOutlined, MenuOutlined } from '@mui/icons-material'
import { Box, Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Header.scss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, makeStyles } from '@mui/material';
import logo from '../assets/kIkiTrans.png'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../conn';
import { actionTypes } from '../reducer';
import Swal from 'sweetalert2';
import '../styles/Header.scss'

const Header = () => {

    const [active,setActive] = useState(false);

    const [{pollos,user},dispatch] = useStateValue();
    const history = useNavigate();

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
        
        <div className='header'>

                    <div className="header__logo">
                    <Link to='/'>
          <IconButton>
            <img src={logo}
            height='100px'
            />
          </IconButton>
          </Link>
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <IconButton className='close' onClick={showMenu}>
                            <Icon>
                                Close
                            </Icon>
                        </IconButton>
                    </div>
                    <li>
                        <Link to='/' ><div className='listado'>INICIO</div></Link>
                    </li>
                    <li>
                        <Link to='/carta'>Carta</Link>
                    </li>
                    <li>
                        <Link to='/nosotros'>Nosotros</Link>
                    </li>
                    <li>
                    <a href="https://api.whatsapp.com/send?phone=+975464565&text=Me%20interesa%20saber%20sobre%20Kikiri%20Brasa%20!!!" target="_blank">Contactame</a>
                    </li>
                    <li>
                        <div className='ingresar'>
                    <Typography>
            Hola {user?user.displayName||user.email:'Invitado'}
          </Typography>
          <Link to='/login'>
          <p className='botonlogin' color="inherit" onClick={handleAuth}>{user?"Salir":"Ingresar"}</p></Link>
          <Link to='checkout-page'>
          <IconButton color='inherit'>
            <Badge badgeContent={pollos?.length} color="secondary">
            <Icon >shopping_cart</Icon>
            </Badge>
          </IconButton>
          </Link></div>
                    </li>
                </ul>
            </nav>
            

                    <div className="changer">
                    <IconButton className='menu' onClick={showMenu}>
                            <Icon>
                               menu
                            </Icon>
                        </IconButton>
                    </div>
                    </div>
    )
}

export default Header