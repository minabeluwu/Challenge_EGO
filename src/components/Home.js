import React, {useState, useEffect} from 'react'
import Product from './Product'
import Menu from './Menu'

const Home = () => {

    const [searchResults, setSearchResults] = useState({
        listProduct: [],
        filterList: [],
      })
      
    const handleSort = (e) => {
        const {value} = e.target

        const sortedList = searchResults.filterList.sort((a, b) => {
            switch (value) {
                case "menorMayor":
                    return a.price - b.price
                case "mayorMenor":
                    return b.price - a.price
                case "masNuevos":
                    return b.year - a.year
                case "masViejos":
                    return a.year - b.year
                default:
                    break;
            }
        }
        )

        setSearchResults({
            ...searchResults, filterList: sortedList
        })
    }

    const handleFilterDesktop = (value) => {
        const filterList = searchResults.listProduct.filter (item => item.segment === value || value === "todos")
        setSearchResults({
          ...searchResults, filterList 
        })

        
    }

      useEffect(() => {
          fetch(`http://challenge.agenciaego.tech/models`).then(
              resp => {
                resp.json().then(json => {
                  json && setSearchResults({
                    listProduct: json,
                    filterList: json
                  })
                })
              }
            )
      }, [])

      const handleFilterbySegment = (e) => {

        const {value} = e.target 
        
        const filterList = searchResults.listProduct.filter (item => item.segment === value || value === "todos")
        setSearchResults({
          ...searchResults, filterList 
        })

      }


    return(
        <>
            <Menu handleFilter={handleFilterbySegment} handleSort={handleSort} handleFilterDesktop={handleFilterDesktop}/>
            <Product filteredAndSortedList={searchResults.filterList}/>
        </>
    )
}

export default Home