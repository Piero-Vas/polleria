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
export default function CheckoutCard({item:{id,nombre,precio,descripcion,imagen,}}) {
  const [{pollos},dispatch] = useStateValue();
  const deleteToPollos = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id:id,
    }
    )

  return (
    <Card sx={{}}>
      <CardHeader
        sx={{height:80,}}
        title={<Grid container justifyContent="space-between" alignItems="flex-start" >
          <Grid item xs={8} >
          <Typography 
          
        variant='h5'
        color='textPrimary'>
          {nombre}
        </Typography>
          </Grid>
          <Grid item >
          <Typography
          
        variant='h6'
        color='textPrimary'>
          {`S/.`+ precio + 0}
        </Typography>
          </Grid>
          
        </Grid>}
      />
      <CardMedia
        component="img"
        object-fit
        image={imagen}
        alt="Shoes"
      />
      <CardContent>
        <Typography sx={{height:60}} variant="body2" color="text.secondary">
        {descripcion}
        </Typography>
      </CardContent>
      <div className='carrito'>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={deleteToPollos}>
          <Icon>delete</Icon>
        </IconButton>
        
      </CardActions>
      </div>
    </Card>
  );
}
