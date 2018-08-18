import React from 'react';

import classes from './Navbar.css';

const Navbar = () => (

    <div className={[classes.navbarCSS, "fixed-top navbar navbar-expand bg-dark justify-content-center flex-column"].join(' ')}>
      <div className="navbar-nav-scroll">
	<ul className="navbar-nav">
	  <li className="nav-item">
	    <a className="nav-link" href="#">Home</a>
	  </li>
	  <li className="nav-item">
	    <a className="nav-link" href="#">Documentation</a>
	  </li>
	  <li className="nav-item">
	    <a className="nav-link" href="#">Downloads</a>
	  </li>
	  <li className="nav-item">
	    <a className="nav-link" href="#">About</a>
	  </li>
	</ul>
      </div>
    </div>
    
);

export default Navbar;
