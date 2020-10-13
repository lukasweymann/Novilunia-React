import React from 'react';
import Logo from '../images/novilunia-logo.png';
import './NavBar.css';


function NavBar() {
    return(
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        
         
          <img src={Logo} className="novilunia-logo" alt="company's logo" />
        
       
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="#" className="navbar-link" target="_blank">Productos</a>
          <a href="#" className="navbar-link" target="_blank">Nosotros</a>
          <a href="#" className="navbar-link" target="_blank">Contacto</a>
        </div>
        </div>
    
    )
}

export default NavBar;