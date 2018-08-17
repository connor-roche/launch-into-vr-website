import React from 'react';

import classes from './VRTutorial.css';
import Aux from '../../hoc/Aux/Aux';
import logo from '../../assets/images/logo-large.png';


const VRTutorial = () => (

    <Aux>
      <section className="d-flex flex-column justify-content-center container align-items-center">
	<img className={[classes.logo, "img-fluid"].join(' ')} src={logo}/>
	<p className={classes.projectDescription} id={classes.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nisl, suscipit quis lorem a, volutpat mollis nulla. Suspendisse potenti. Curabitur in justo nec metus efficitur varius at id leo.</p>
	<p className={classes.projectDescription} id={classes.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nisl, suscipit quis lorem a, volutpat mollis nulla. Suspendisse potenti. Curabitur in justo nec metus efficitur varius at id leo. Suspendisse ornare fringilla augue at ultrices. Donec at est nec erat egestas porttitor quis id diam. Morbi sed magna fermentum eros dapibus ultrices eget vel mi. Fusce porttitor pulvinar facilisis. </p>
	<div className={classes.buttons}>
	  <button type="button" className="btn btn-outline-dark">Get Started</button>
	  <button type="button" className="btn btn-outline-dark" id={classes.download}>Download</button>
	</div>
	<div className={[classes.video, "embed-responsive embed-responsive-16by9"].join(' ')}>
	  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vyPD4pjwq1Q" allowFullScreen></iframe>
	</div>
      </section>
    </Aux>
);

export default VRTutorial;
