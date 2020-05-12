import React, { useState, useEffect } from "react"
import Ficha from './Ficha'
import {useParams} from "react-router"


function SegundaPantalla() {
    const params = useParams()
    const [searchResult, setSearchResult] = useState({})

    useEffect(() => {
        fetch(`http://challenge.agenciaego.tech/models/${params.id}`).then(
            resp => {
              resp.json().then(json => {
                json && setSearchResult(json)
              })
            }
          )
    })
    
    return(
      <div className="results">
          {<Ficha {...searchResult} />}
      </div> 
    )
}

export default SegundaPantalla