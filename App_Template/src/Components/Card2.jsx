// Card2.jsx

import { Link } from "react-router-dom";
import Button from "./Button";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from "react";

function Card2({ shoe }) {
  const [liked, setLiked] = useState(Array(shoe.length).fill(false));
  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };
  return (
   <>
   
       <div className=" group holder w-[80vw] xxs:w-[40vw] md:w-[40vw]  jl:max-w-80 h-auto p-4 shadow-md rounded bg-gray-100 flex flex-col my-3 font-Primary jl:hover:h-[57vh] jl:hover:max-w-90 mx-auto xxs:mx-0">
  <div className="imageholder h-50 jl:max-h-3/5 w-full relative">
 
    <img 
      src={shoe.image} 
      alt={shoe.name}
      className="w-full h-full object-cover rounded-t-xl " 

    />
    <button
            onClick={() => toggleLike(shoe.id)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:scale-110 transition"
          >
            {liked[shoe.id] ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
    </button>
  </div>
   <div className="textholder h-full   flex-row items-center pt-3">
      <span className={`${shoe.buttonColor} text-2xl p-1 text-white text-center mr-1`}>{shoe.collectionType}</span><span className={`${shoe.buttonColor} text-2xl p-1 text-white text-center`}>{shoe.deal}</span>
        <div className="text-lg font-semibold mb-2">{shoe.name}</div>
       <div className="mt-2 text-md text-gray-600 flex">₹{shoe.price}<p className="px-3 line-through">₹{shoe.mrp}</p><span className={`${shoe.buttonColor}  text-white  text-center`}>{shoe.discount}% off</span></div>
       <div className="mt-1 text-xs text-gray-500">Sizes: {shoe.sizes.join(', ')}</div>
       {<Link to={`/Shop/${shoe.id}`}><Button buttonColor={shoe.buttonColor} text={"Know More"}/></Link>}
       <div className="text-gray-800 text-2xl hidden group-hover:flex">{shoe.desc}</div>
      </div>
</div>
   
   </>

  );
}

export default Card2;

      