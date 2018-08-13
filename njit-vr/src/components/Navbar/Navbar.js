import React, {Component} from 'react';

class Navbar extends Component {

    render () {
	return (
	    <header className="navbar navbar-expand bg-dark justify-content-center flex-column">
	      <a className="navbar-brand d-block mx-auto p-2" alt="project label" href="">logo link to go here</a>
	      <div className="navbar-nav-scroll p-2">
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
		    <a className="nav-link text-white-50" href="#">Creators</a>
		  </li>
		</ul>
	      </div>
	    </header>
	);
    }
    
};

export default Navbar;
