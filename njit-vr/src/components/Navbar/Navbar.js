import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navbar.css';

const Navbar = () => (

    <div className={[classes.navbarCSS, "fixed-top navbar navbar-expand bg-dark justify-content-center flex-column"].join(' ')}>
      <div className="navbar-nav-scroll">
	<ul className="navbar-nav">
	  <li className="nav-item">
	    <NavLink to="/" className="nav-link" exact activeStyle={{color: 'white'}}>Home</NavLink>
	  </li>
	  <li className="nav-item">
	    <a className="nav-link" href="#">Documentation</a>
	  </li>
	  <li className="nav-item">
	    <NavLink to="/downloads" className="nav-link" exact activeStyle={{color: 'white'}}>Downloads</NavLink>
	  </li>
	  <li className="nav-item">
	    <NavLink to="/about" className="nav-link" exact activeStyle={{color: 'white'}}>About</NavLink>
	  </li>
	</ul>
      </div>
    </div>
    
);

export default Navbar;
