import React from "react"
import '../Styles/groupOne.css'

import Features from './Features'
import Highlight from './Highlight'
import {API_ROOT} from '../constants'

export default ({id, name, title, photo, segment, year, price, thumbnail, description, model_features, model_highlights}) => {

    console.log(name)
    console.log(JSON.stringify(model_highlights))
    console.log(JSON.stringify(model_features))

    
    const listProduct = model_features?.map( (product, index) => (
        <Features {...product }  key={index}/>
    ))

    const listHighlight = model_highlights?.map( (product, index) => (
        <Highlight {...product }  key={index}/>
    ))
    

  return (
      <>
        <div className="group-1" >
            <img src={`${API_ROOT}${photo}`} alt=" " className="group-1-img"/>

            <div className="group-1-container">
                <h2 className="group-1-title_uno">{name}</h2>
                <h3 className="group-1-title_dos">{title}</h3>

                <p className="group-1-paragraph">
                    {description}
                </p>
            </div>
        </div>

        <div className="group-2">
            <div className="group-2-content">
                {listProduct}
            </div>
        </div>
        
        <div className="group-3" >
            {listHighlight}
        </div>
      </>
 
  )
}