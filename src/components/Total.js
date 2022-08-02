import { Button } from '@mui/material'
import React from 'react'
import { getPollosTotal } from '../reducer';
import { useStateValue } from './StateProvider';
import '../styles/Total.scss'

const Total = () => {
  const [{pollos},dispatch] = useStateValue();
  var cantidad = pollos.reduce((acumulador,item)=>item.precio + acumulador,0)
  console.log(cantidad)
  return (
    <div className='container'>
      <div className='datos'>
        <h5>Total Items:  {pollos?.length}</h5><br></br>
        <h5>Total a Pagar :  S/.{ Math.round(cantidad)}</h5>
        </div>
        <div className='boton'>
        <a >Pagar</a>
        </div>
    </div>
  )
}

export default Total