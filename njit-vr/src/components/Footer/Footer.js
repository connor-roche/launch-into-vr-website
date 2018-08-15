import React from 'react';

import classes from './Footer.css';

const Footer = (props) => {

    return (
	<footer className="row align-items-center">
	  <div className="col-sm-3 text-center">&copy; NJIT Capstone Robotics</div>
	  <a className={[classes.githubLink, "col-sm-1 text-center"].join(' ')} href="https://github.com/connor-roche/launch-into-vr-website">Github</a>
	  <div className="col-sm-3 offset-sm-5 d-flex justify-content-center">
	    <button type="button" className="btn btn-outline-dark">Download</button>
	  </div>
	</footer>
    );
    
};

export default Footer;
