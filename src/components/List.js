import React from "react"
import {API_ROOT} from '../constants'
import {Link} from "react-router-dom"

export default ({id, name, photo, price, year }) => {
    

    
  return (
      <div className="product">
            <div className="product-container">
                
                <h2 className="product-title">{name}</h2>
                <p className="product-content">
                    {year} | ${price}
                </p>

                <img src={`${API_ROOT}${photo}`} alt=" " className="product-img" />

                <Link to={`/Ficha/${id}`} className="product-link">
                    <p>Ver modelo</p>
                </Link>  
            </div>
      </div>
    
  )
}