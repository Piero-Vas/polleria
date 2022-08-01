import { Grid,Box } from '@mui/material'
import React from 'react'
import '../styles/Nosotros.scss'
import video from '../assets/kikirivideo.webm'
import NosotrosDatos from './NosotrosDatos'
const Nosotros = () => {
  return (
    <Box sx={{ flexGrow: 1, padding:5 }}>
        <Grid container spacing={3} marginTop={15}>
        <div className='container_cover'>
            <div className='cover'>
            <div className='text__information-cover'>
            
                <h1>Somos el Mejor Sabor de Pollo</h1>
            
                <p>Motivados con el crecimiento gastronómico que nuestro país viene generando en los últimos años, el reconocimiento de los restaurantes peruanos entre los mejores del mundo y el hecho que Perú sea considerado como el cuarto país emergente del mundo para invertir, ha generado que se desarrolle nuevos productos y servicios cumpliendo con las exigencias del mercado. Con la receta de nuestros antepasados y los ingredientes de nuestras cosechas, resultados esperados para que ud pueda disfrutar del Sabor del Pollo Campesino</p>
           
           <div className='buttons__cover'>
            <input type="button" class="btn__register-cover" value="Leer más"></input>
           </div>
            </div>
            <div className='media_cover'>
                
            <video src={video} autoplay playinline loop muted preload="auto"></video>
            </div>
            </div>
        </div>
        </Grid>
    </Box>
  )
}

export default Nosotros