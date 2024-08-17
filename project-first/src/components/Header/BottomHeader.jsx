import React from "react";
import Row from "../common/Row";
const menus=[
    'Jeelry & Accessories',
    'Clothing & Shoes',
    'Home & Living',
    'eeding & Party',
    'Toys & Enteraitment',
    'Art & Collectibles',
    'Craft Supplies & Tools',
    ]


const BottomHeader = () => {
  return (
    <div className='w-full px-[10%] h-[60px] bg-[#bfc3c70d] '>
        <Row className='flex items-center h-full justify-between' >
        {menus.map ((item) =>[
          <p className='text-[16px] text-slate-800' key={item}>{item}</p>
        ])};
        
      </Row>
    </div>
  );
    
}

export default BottomHeader
