import React from "react"
import '../Styles/groupTwo.css'
import {API_ROOT} from '../constants'


export default ({name, description, photo}) => {

  return (
        <div className="group-2-container">
            <img src={`${API_ROOT}${photo}`} alt=" " className="group-2-img" />
            <h1 className="group-2-title">{name}</h1>
            <p className="group-2-description">{description}</p>
            
        </div>
        
        
  )
}