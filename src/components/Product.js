import React from "react"
import '../Styles/product.css'
import List from './List'


function Product(props) { 
    
    const listProduct = props.filteredAndSortedList.map( (product, index) => (
        <List {...product }  key={index}/>
    ))
    
    return(
        <div className="results">{listProduct}</div> 
    )
}

export default Product