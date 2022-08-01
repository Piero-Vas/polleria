import { Grid , Box} from '@mui/material'
import React from 'react'
import persona1 from '../assets/pic-1.png'
import persona2 from '../assets/pic-2.png'
import persona3 from '../assets/pic-3.png'
import persona4 from '../assets/pic-4.png'
import '../styles/Inicio.scss'
const Opinion = () => {
  return (
    <div className='productos'>
    <Box sx={{ flexGrow: 1, padding:5, }}>
      
      <Grid container spacing={3} >
      <section class="review" id="review">


<h2 class="heading"> Opinion de Nuestros Clientes  </h2>

<div class="swiper-container review-slider">

    <div class="swiper-wrapper">

        <div class="swiper-slide slide">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src={persona1} alt=""/>
                <div class="user-info">
                    <h3>Jake Holguin</h3>
                   
                </div>
            </div>
            <p>Es muy recomendable, los sabores son muy exquisitos, además las cremas y ajies son una delicia. El servicio de delivery es muy apreciable, desde el motorizado que hace el reparto hasta los productos que vienen embazados, todo muy limpio.</p>
        </div>

        <div class="swiper-slide slide">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://www.redestrategia.com/wp-content/uploads/2015/09/personas-exitosas.jpeg" alt=""/>
                <div class="user-info">
                    <h3>Mark</h3>
                    
                </div>
            </div>
            <p>La atención es muy buena, brindan mucha información y además nos comentan de sus promociones a diario; les recomiendo KikiriBrasa; en sus redes sociales ofrecen descuentos y promociones.</p>
        </div>

        <div class="swiper-slide slide">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://static2.abc.es/media/bienestar/2022/06/01/jesus-matos-2-kQVC--620x349@abc.png" alt=""/>
                <div class="user-info">
                    <h3>Adrian Montes</h3>
                    
                </div>
            </div>
            <p>La carta es muy buena, no solo venden Pollo sino que nos ofrecen una variedad de productos que a uno se les antoja en el momento de pedir; muy rico todo. Mis felicitaciones para KikiriBrasa..!!!</p>
        </div>

        <div class="swiper-slide slide">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://www.trecebits.com/wp-content/uploads/2019/02/Persona-1-445x445.jpg" alt=""/>
                <div class="user-info">
                    <h3>Thalia</h3>
                   
                </div>
            </div>
            <p>Los felicito por la iniciativa, además que son muy ricos los platos que ofrecen; en la variedad esta el gusto; les sugiero que adieran a su carta un rico caldo de gallina con eso ya no tienen pierde.. Tiemblen la competencia.</p>
        </div>

    </div>

</div>

</section>
      </Grid>
    </Box>
    </div>
  )
}

export default Opinion