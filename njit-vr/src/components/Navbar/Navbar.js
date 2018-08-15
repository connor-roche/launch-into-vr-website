import React, {Component} from 'react';

import logo from '../../assets/images/logo-small.png';

class Navbar extends Component {

    render () {
	return (
	    <header className="fixed-top navbar navbar-expand bg-dark justify-content-center flex-column">
	      <div className="navbar-nav-scroll">
		<ul className="navbar-nav">
		  <li className="nav-item">
		    <a className="nav-link active text-white-50" href="#">Home</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link text-white-50" href="#">Documentation</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link text-white-50" href="#">Downloads</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link text-white-50" href="#">About</a>
		  </li>
		</ul>
	      </div>
	    </header>
	);
    }
    
};

export default Navbar;
