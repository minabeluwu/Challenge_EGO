import React from 'react'
import '../Styles/menu.css'

function Menu(prop) {

    return(
        <div className="present">
        <p className="present-paragraph">Descubrí todos los <br/>modelos</p>

        <div className="present-container">
            <div>
                <select className="present-select" onChange={prop.handleFilter}>
                    <option>Filtrar por</option>
                    <option value="todos">Todos</option>
                    <option value="Autos">Autos</option>
                    <option value="Pickups y Comerciales">Pickups y Comerciales</option>
                    <option value="SUVs y Crossovers">SUVs y Crossovers</option>
                </select>

                <div className="present-content">
                    <p className="present-link"><span className="link-bold">Filtrar por</span></p>
                    <p className="present-link" onClick={() => prop.handleFilterDesktop("todos") }>Todos</p>
                    <p className="present-link" onClick={() => prop.handleFilterDesktop("Autos") }>Autos</p>
                    <p className="present-link" onClick={() => prop.handleFilterDesktop("Pickups y Comerciales") }>Pickups y Comerciales</p>
                    <p className="present-link" onClick={() => prop.handleFilterDesktop("SUVs y Crossovers") }>SUVs y Crossovers</p>
                </div>
            </div>  
    
            <select className="present-select" onChange={prop.handleSort}>
                    <option>Ordenar por</option>
                    <option value="menorMayor">De menor a mayor precio</option>
                    <option value="mayorMenor">De mayor a menor precio </option>
                    <option value="masNuevos">Más nuevos primero</option>    
                    <option value="masViejos">Más viejos primero</option>       
            </select>
        </div>

        <div className="line"></div>
    </div>
    )
}

export default Menu