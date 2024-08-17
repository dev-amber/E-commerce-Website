import React from 'react'
import Row from './common/Row'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
  return (
    <Link className="w-full shadow pb-[5px] " to={'/product/$(data._id'}>
        <img 
        src={data.img} 
        alt={data.title}
        className='w-full object-cover h-[400px]'
        />
        <Row className='px-[10px] '>
            <h6 className='text-black text-[15px] font-semibold  mt-[18px]'> 
                {data.title}</h6>

        </Row>
        <Row className='justify-between mt-[16px] px-[10px] mb-[10px] '>
            <p className='text-[16px] text-[#685a5a]'> {data.category.title}</p>
            <p className='text-[16px] text-[#6d6767] font-bold'>{data.price}</p>

        </Row>
    </Link>
  )
}

export default ProductCard
