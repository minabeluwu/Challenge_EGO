import React from "react"
import {API_ROOT} from '../constants'
import '../Styles/groupTree.css'

export default ({title, content, image}) => {

  return (
    
        <div className="group-3-container">
            <img src={`${API_ROOT}${image}`} alt=" " className="group-3-img" />

            <div className="group-3-content">
                <h3 className="group-3-title">{title}</h3>
                <p className="group-3-paragraph">{content}</p>
            </div>
        </div>
    
  )
}
