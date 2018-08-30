import React from 'react';

import classes from './DocumentationContent.css';
import Aux from '../../hoc/Aux/Aux';

const DocumentationContent = () => (

    <Aux>
      <section className={[classes.content, "container"].join(' ')}>
	<h1>Introduction</h1>
	<p className={classes.introDesc}>Get started with Launch into VR, one of the few complete video game tutorials built for the Gear VR headset.</p>
	<h3 className={classes.subTitle}>Launch Into VR Overview</h3>
	<p>Launch into VR is a game that is sectioned into six stages, where each stage is meant to teach a particular way of interacting with a VR environment and using the Gear VR technology. Throughout the course of Launch there is a robot assistant to give directions and hints.</p>
	<h5>Stage 1</h5>
	<p>Four arrows appear and the player has to look at each one for a few seconds in a specific order. This teaches the player how to look around a VR environment.</p>
	<h5>Stage 2</h5>
	<p>The player has to hold down the home button on the controller for a few seconds. This teaches the player how to recenter their controller.</p>
	<h5>Stage 3</h5>
	<p>A box floats up and a button appears for the player to press using the trigger button on the controller. This teaches the player how to use the trigger button to select objects.</p>
	<h5>Stage 4</h5>
	<p>A ball falls down to the floor and the player has to pick it up, hold it (by holding down on the trigger button), and drop it into the opened section of the floor. This teaches the user to pick up and move around objects.</p>
	<h5>Stage 5</h5>
	<p>The same ball appears and now the player must hold it then throw it by swiping forward or backward on the touchpad. This teaches the player how to throw objects.</p>
	<h5>Stage 6</h5>
	<p>Targets and a new ball appear and now the player must use all their previously acquired skills to destroy the targets with the balls.</p>
	<h3 className={classes.subTitle}>Documentation</h3>
	<p>Right now our documentation is done by Doxygen. This is not ideal, but for now, it gets the job done. Bear in mind that all our code in the Unity Package contains extensive internal XML documentation as well.</p>
	<a href="https://firebasestorage.googleapis.com/v0/b/njit-vr-c62b1.appspot.com/o/Documentation.zip?alt=media&token=30ff21a1-cc3c-45b0-95ef-6110b779f9d4" className="btn btn-outline-secondary">Doxygen Documentation</a>
	<p style={{marginTop: '20px'}}><strong>We plan to update our documentation by the middle of September 2018 to make it more legible and better represent our framework.</strong></p>
      </section>
    </Aux>
    
);

export default DocumentationContent;
