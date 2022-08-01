import { Box, Grid } from '@mui/material'
import {} from '@mui/icons-material'
import React from 'react'
import Footer from './Footer'
import '../styles/Inicio.scss'
import SwipeableTextMobileStepper from './Opiniones'
import Nosotros from './Nosotros'
import Ofertas from './Ofertas'

const Inicio = () => {
  return (
        <div>
            <Nosotros/>
            <Ofertas/>
            <SwipeableTextMobileStepper/>
        <Footer/>
        </div>
  )
}

export default Inicio