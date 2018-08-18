import React from 'react';

import classes from './AboutContent.css';
import Aux from '../../hoc/Aux/Aux';

import pat from '../../assets/images/pat.jpg';

const AboutContent = () => (
    
    <Aux>
      
      <section className={[classes.content, "container"].join(' ')}>
	<h1>About</h1>
	<p className={classes.aboutDesc}>Learn about the history of Launch and the team that created it.</p>
	<h3 className={classes.subTitle}>History</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus faucibus molestie tempus. Vestibulum pretium faucibus est, quis volutpat diam ornare sit amet. Sed dignissim cursus turpis, eget congue leo suscipit eget. Aliquam lacinia risus nec orci convallis, id lacinia urna sollicitudin. Maecenas vitae condimentum velit, in congue augue. Phasellus id est a sapien hendrerit congue quis et justo. </p>
	<h3 className={classes.subTitle}>Team</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec diam massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
	
	<div className="row">
	  
	  <div className={[classes.teamMember, "col-lg-4 offset-lg-1"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Michael Martin</h5>
		<p className="card-text">Michael is a graduate computer science student who enjoys game development and fitness training.</p>
		<a href="#" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	  <div className={[classes.teamMember, "col-lg-4 offset-lg-2"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Connor Roche</h5>
		<p className="card-text">Connor is a recent college grad with interests in full stack web development, Linux, and hockey.</p>
		<a href="#" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	</div>

	<div className="row">

	  <div className={[classes.teamMember, "col-lg-4 offset-lg-1"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Patrick Delong</h5>
		<p className="card-text">Pat is a computer science student whose focus is on cybersecurity and playing Super Smash Bros.</p>
		<a href="#" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>

	  <div className={[classes.teamMember, "col-lg-4 offset-lg-2"].join(' ')}>
	    <div className={[classes.card, "card"].join(' ')}>
	      <img className="card-img-top" src={pat} alt="Card image cap" />
	      <div className="card-body">
		<h5 className="card-title">Alek Gulbenkian</h5>
		<p className="card-text">Alek is a recent college grad with a passion for web development and competitive lifting. </p>
		<a href="#" className="btn btn-outline-secondary">GitHub</a>
	      </div>
	    </div>
	  </div>
	  
	</div>

      </section>
      
    </Aux>
    
);

export default AboutContent;
