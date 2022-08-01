import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid, Icon } from '@mui/material';
import { actionTypes } from '../reducer';
import { useStateValue } from './StateProvider';
import '../styles/Product.scss'
export default function Product({product:{id,nombre,precio,descripcion,imagen,categoria}}) {

const [{pollos},dispatch] = useStateValue();

const addToPollos = () =>{
  dispatch({
    type: actionTypes.ADD_TO_POLLOS,
    //si el valor es igual a la llaver (id:id) se puede poner solo el valor
    item: {
      id:id,
      nombre:nombre,
      categoria:categoria,
      precio:precio,
      descripcion:descripcion,
      imagen:imagen
  }
  })
}
  return (
    <Card sx={{borderRadius:6}}>
      <CardMedia
        component="img"
        object-fit="true"
        image={imagen}
      />
      <CardContent sx={{height:200}}>
      <h1>
        {nombre} 
      </h1>
      <h2> S/.{precio}0</h2>
        <Typography sx={{height:60}} variant="body2" color="text.secondary">
        {descripcion}
        </Typography>
      </CardContent>
      <div className='carrito'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToPollos}>
          <h6>Agregar al carrito</h6>
          <Icon>add_shopping_cart</Icon>
        </IconButton>
       
      </CardActions>
      </div>
    </Card>
  );
}
