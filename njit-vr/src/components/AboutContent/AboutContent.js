import React from 'react';

import classes from './AboutContent.css';
import Aux from '../../hoc/Aux/Aux';

import pat from '../../assets/images/pat.jpg';
import connor from '../../assets/images/connor.jpg';

const AboutContent = () => (
    
    <Aux>
      
      <section className={[classes.content, "container"].join(' ')}>
	<h1>About</h1>
	<p className={classes.aboutDesc}>Learn about the history of Launch and the team that created it.</p>
	<h3 className={classes.subTitle}>History</h3>
	<p> Launch into VR is a capstone project created by four senior computer science students at NJIT. Nobody in the team knew each other before working on the game. We came together and completed Launch in two months despite having no prior experience in Unity, C#, game design, or 3D asset creation.</p>
	<h3 className={classes.subTitle}>Team</h3>
	<p>Each team member utilized their specific set of skills in order to achieve the completed tutorial game.</p>

	{/* Team Member Cards */}
	
	<div className="row">
	  
	  <div className={[classes.teamMember, "col-xl-4 offset-xl-1 col-lg-5 col-md-6 col-sm-9 col-10"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Michael Martin</h5>
		<p className="card-text">Michael is a graduate computer science student who enjoys game development and fitness training.</p>
		<a href="https://github.com/michaeljmartin28" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	  <div className={[classes.teamMember, "col-xl-4 offset-xl-2 col-lg-5 offset-lg-2 col-md-6 col-sm-9 col-10"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={connor} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Connor Roche</h5>
		<p className="card-text">Connor is a recent college grad with interests in full stack web development, Linux, and hockey.</p>
		<a href="https://github.com/connor-roche" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	</div>

	<div className="row">

	  <div className={[classes.teamMember, "col-xl-4 offset-xl-1 col-lg-5 col-md-6 col-sm-9 col-10"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Patrick Delong</h5>
		<p className="card-text">Pat is a computer science student whose focus is on cybersecurity and playing Super Smash Bros.</p>
		<a href="https://github.com/pdelong21" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	  <div className={[classes.teamMember, "col-xl-4 offset-xl-2 col-lg-5 offset-lg-2 col-md-6 col-sm-9 col-10"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Alek Gulbenkian</h5>
		<p className="card-text">Alek is a recent college grad with a passion for web development and competitive lifting. </p>
		<a href="https://github.com/agulbs" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>
	  
	</div>

      </section>
      
    </Aux>
    
);

export default AboutContent;
