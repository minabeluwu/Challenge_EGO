import React, { useEffect } from "react"
import '../src/Styles/header.css'
import {
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import Home from './components/Home'
import Footer from './components/Footer'
import SegundaPantalla from './components/SegundaPantalla'
import './App.css';

import logo from './img/logo@3x.png'


function Layout() {
  const history = useHistory()
  useEffect( () => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0)
    })
  })

  const styles = {
    bmMenu: {
      overflow: "none"
    }
  }

  return (
    <>
        <div className="header">
              <div className="header-container">
                  <img src={logo} className="header-logo"/>

                  <Link to="/" className="header-link">
                        Modelos
                  </Link>
                  <Link to="/Ficha/1" className="header-link">
                        Ficha de modelos
                  </Link>   
              </div>

              <Menu  isOpen={true} styles={styles} > 

                <a href="./" className="menu-link">Modelos</a>
                <a href="./" className="menu-link">Servicios y Accesorios</a>
                <a href="./" className="menu-link">Financiación</a>
                <a href="./" className="menu-link">Reviews y Comunidad</a>
                
                <div className="line"></div>

                <a href="./" className="menu-link">Toyota Mobility Service</a>
                <a href="./" className="menu-link">Toyota Gazoo Racing</a>
                <a href="./" className="menu-link">Toyota Híbridos</a>

                <div className="line"></div>

                <a href="./" className="menu-link">Concesionarios</a>
                <a href="./" className="menu-link">Test Drive</a>
                <a href="./" className="menu-link">Contacto</a>

                <div className="line"></div>
              
                <a href="./" className="menu-link">Actividades</a>
                <a href="./" className="menu-link">Servicios al Cliente</a>
                <a href="./" className="menu-link">Ventas Especiales</a>  
                <a href="./" className="menu-link">Innovación</a>
                <a href="./" className="menu-link">Prensa</a>
                <a href="./" className="menu-link">Acerca de...</a>
              
              </Menu>
        </div>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Ficha/:id" exact>
            <SegundaPantalla/>
          </Route>
        </Switch>

        <Footer/>
    </>
  );
}

export default Layout;
