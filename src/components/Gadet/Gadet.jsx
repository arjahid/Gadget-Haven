import React, { createContext } from "react";
import { NavLink } from "react-router-dom";



const Gadet = ({ gadet }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    availability,
    rating,
  } = gadet;
  
  return (
    <div className="card bg-base-100 w-90 shadow-xl ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product_title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Price: {price}</p>
   {/* <button   className="btn btn-outline  text-purple-400">View Details</button> */}
   <NavLink to={`/gadet/${product_id}`} className="btn btn-outline  text-purple-400">View Details</NavLink>
  </div>
</div>
  );
};

export default Gadet;
