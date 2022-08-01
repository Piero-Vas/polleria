import { Box ,Grid, Icon} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../styles/Product.scss'
import { Link } from 'react-router-dom';
const Ofertas = () => {
  return (
    <Box sx={{ flexGrow: 1, padding:5, }}>
      
      <Grid container spacing={3} >
      <section class="review" id="review">


<h2 class="heading"> NUESTRAS OFERTAS </h2>

<div class="swiper-container review-slider">

    <div class="swiper-wrapper">

    <Card sx={{marginRight:3}}>
      <CardHeader
        sx={{height:120,}}
        title={<Grid container justifyContent="space-between" alignItems="flex-start" >
          <Grid item xs={8} >
          <Typography 
          
        variant='h5'
        color='textPrimary'>
          PACK REFRÉSCATE
        </Typography>
          </Grid>
          <Grid item >
          <Typography
          
        variant='h6'
        color='textPrimary'>
          {`S/.75.90`}
        </Typography>
          </Grid>
          
        </Grid>}
      />
      <CardMedia
        component="img"
        object-fit="true"
        image= "https://raw.githubusercontent.com/Piero-Vas/polleria/master/src/assets/promociones/500x500-pack-refrescate_1.jpg"
      />
      <div className='carrito'>
        <Link to='/carta'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
        <h6>Ver Carta</h6>
        <Icon>menu_book</Icon>
        </IconButton>
       
      </CardActions>
      </Link>
      </div>
    </Card><Card sx={{marginRight:3}}>
      <CardHeader
        sx={{height:120,}}
        title={<Grid container justifyContent="space-between" alignItems="flex-start" >
          <Grid item xs={8} >
          <Typography 
          
        variant='h5'
        color='textPrimary'>
          MEDIO COMBO DULCE
        </Typography>
          </Grid>
          <Grid item >
          <Typography
          
        variant='h6'
        color='textPrimary'>
          {`S/.50.90`}
        </Typography>
          </Grid>
          
        </Grid>}
      />
      <CardMedia
        component="img"
        object-fit="true"
        image= "https://raw.githubusercontent.com/Piero-Vas/polleria/master/src/assets/promociones/medio-combo-dulce_3.jpg"
      />
      <div className='carrito'>
        <Link to='/carta'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
        <h6>Ver Carta</h6>
        <Icon>menu_book</Icon>
        </IconButton>
       
      </CardActions>
      </Link>
      </div>
    </Card><Card sx={{marginRight:3}}>
      <CardHeader
        sx={{height:120,}}
        title={<Grid container justifyContent="space-between" alignItems="flex-start" >
          <Grid item xs={8} >
          <Typography 
          
        variant='h5'
        color='textPrimary'>
          TALLARIN DE CARNE
        </Typography>
          </Grid>
          <Grid item >
          <Typography
          
        variant='h6'
        color='textPrimary'>
          {`S/.26.90`}
        </Typography>
          </Grid>
          
        </Grid>}
      />
      <CardMedia
        component="img"
        object-fit="true"
        image= "https://raw.githubusercontent.com/Piero-Vas/polleria/master/src/assets/fusi%C3%B3nCriolla/tallarin_carne_3.jpg"
      />
      <div className='carrito'>
        <Link to='/carta'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
        <h6>Ver Carta</h6>
        <Icon>menu_book</Icon>
        </IconButton>
       
      </CardActions>
      </Link>
      </div>
    </Card>
    <Card sx={{marginRight:3}}>
      <CardHeader
        sx={{height:120,}}
        title={<Grid container justifyContent="space-between" alignItems="flex-start" >
          <Grid item xs={8} >
          <Typography 
          
        variant='h5'
        color='textPrimary'>
          CHURRASCO A LO POBRE
        </Typography>
          </Grid>
          <Grid item >
          <Typography
          
        variant='h6'
        color='textPrimary'>
          {`S/.30.90`}
        </Typography>
          </Grid>
          
        </Grid>}
      />
      <CardMedia
        component="img"
        object-fit="true"
        image= "https://raw.githubusercontent.com/Piero-Vas/polleria/master/src/assets/parrillas/500x500-churrasco-a-lo-pobre.jpg"
      />
      <div className='carrito'>
        <Link to='/carta'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
        <h6>Ver Carta</h6>
        <Icon>menu_book</Icon>
        </IconButton>
       
      </CardActions>
      </Link>
      </div>
    </Card>

        

    </div>

</div>

</section>
        </Grid>
        </Box>
  )
}

export default Ofertas