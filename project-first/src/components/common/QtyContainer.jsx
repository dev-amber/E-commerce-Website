import React from 'react'
import Row from './Row'
import Button from './Button'
import { useContext } from 'react'

import { CartContext } from '../../contextAPIs'

const QtyContainer = ({data}) => {
  // const [qty,setQty]=useState(0);
   const {cartItems,handleInc,handleDec}=useContext(CartContext);
   const  cartItem=cartItems?.find(item=>item._id===data?._id)
   
  return (
    <Row className=' items-center'>
  <Button  onClick={()=>handleDec(data)} title='-' className='w-[52px] h-[52px]'/>
  <p className='w-[70px] text-center text-[16px] font-semibold'>{cartItem?.qty}

  </p>
  <Button title='+' className='w-[52px] h-[52px]' onClick={()=>handleInc(data)}/>
</Row>
  )
}

export default QtyContainer
