import React from 'react';
import {Link} from 'react-router-dom';

import classes from './LandingContent.css';
import Aux from '../../hoc/Aux/Aux';
import logo from '../../assets/images/logo-large.png';


const LandingContent = () => (

    <Aux>
      <section className="d-flex flex-column justify-content-center container align-items-center">
	<img className={[classes.logo, "img-fluid"].join(' ')} src={logo} alt="logo" />
	<p className={classes.projectDescription} id={classes.intro}>Launch into VR is a short virtual reality (VR) game designed for Samsung phones compatible with Gear VR. The game is a tutorial meant to help players become more accustomed to VR and teach them how to interact with their environment.</p>
	<p className={classes.projectDescription} id={classes.summary}>Launch was commisioned as a tutorial to a much larger project - a series of educational VR games meant to teach high school students. This tutorial is tailored to teach controls similar to those that will be in the educational games. However, it can be used to generally teach how to use the Gear VR technology given that many games for the Gear VR headset act similar. Feel free to download the Unity package to modify Launch in order to create your own tutorial or a simple game. Or play Launch into VR yourself! </p>
	<div className={classes.buttons}>
	  <Link to="/documentation"><button type="button" className="btn btn-outline-secondary">Get Started</button></Link>
	  <Link to="/downloads"><button type="button" className="btn btn-outline-secondary" id={classes.download}>Download</button></Link>
	</div>
	<div className={[classes.video, "embed-responsive embed-responsive-16by9"].join(' ')}>
	  <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/vyPD4pjwq1Q" allowFullScreen></iframe>
	</div>
      </section>
    </Aux>
);

export default LandingContent;
