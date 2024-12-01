import React from 'react';

import {useNavigate} from 'react-router-dom'

function Card({ imgurl, price, title, id }) {

  const navigate = useNavigate()


  return (
    <div 
      onClick={()=> navigate(`/product/${id}`) }
      className="w-[250px] h-[320px] bg-transparent rounded-sm border shadow-md shadow-white cursor-pointer hover:scale-105 transition-all overflow-hidden text-ellipsis">
      <img
        src={imgurl || ''}
        alt=""
        className="w-full h-[70%] object-cover rounded-md hover:scale-105 transition-all hover:overflow-hidden"
      />
      <h1 className="text-2xl font-bold pl-1 py-1">${price || ''}</h1>
      <p className="px-1 text-[16px] leading-5 text-[#bcbaba] text-ellipsis overflow-hidden">{title || ''}</p>
    </div>
  );
}

export default Card;
