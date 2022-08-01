import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../productData';
import '../styles/Header.scss'

export default function Products() {

  return (
    <div className='productos'>
    <Box sx={{ flexGrow: 1, padding:5, }}>
      <Grid container spacing={3} marginTop={12} >
        {
          products.map(product =>(
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product}/>
            </Grid>
            
          ))
        }
      </Grid>
    </Box>
    </div>
  );
}
