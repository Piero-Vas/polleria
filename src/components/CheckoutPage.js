import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import { useStateValue } from './StateProvider';



export default function CheckoutPage() {
const [{pollos},dispatch] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1, padding:5 }}>
      <Grid container spacing={3} marginTop={12}>
        <Grid item xs={12}>
            <Typography align='center' gutterBottom variant='h4'>
                Carrito de Compras
            </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
            {
            pollos.map(item =>(
                <Grid item xs={12} sm={8} md={6} lg={4}>
                  <CheckoutCard item={item}/>
                </Grid>
                
              ))
        }
        </Grid>
        <Grid item xs={12} sm={4} md={3} >
            <Total/>
        </Grid>
      </Grid>
    </Box>
  );
}
