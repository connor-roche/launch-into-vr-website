import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import logo from '../../assets/images/logo-large.png';


const VRTutorial = (props) => {

    return (
	<Aux>
	  <section className="d-flex flex-column justify-content-center container align-items-center">
	    <img className="img-fluid" style={{marginTop: '80px'}} src={logo}/>
	    <p className="" style={{marginTop: '50px', width: '90%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nisl, suscipit quis lorem a, volutpat mollis nulla. Suspendisse potenti. Curabitur in justo nec metus efficitur varius at id leo.</p>
	    <p className="" style={{marginTop: '20px', width: '90%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nisl, suscipit quis lorem a, volutpat mollis nulla. Suspendisse potenti. Curabitur in justo nec metus efficitur varius at id leo. Suspendisse ornare fringilla augue at ultrices. Donec at est nec erat egestas porttitor quis id diam. Morbi sed magna fermentum eros dapibus ultrices eget vel mi. Fusce porttitor pulvinar facilisis. </p>
	    <div style={{marginTop: '30px'}}>
	      <button type="button" className="btn btn-outline-dark" style={{width: '180px', height: '50px', marginRight: '10px'}}>Get Started</button>
	      <button type="button" className="btn btn-outline-dark" style={{width: '180px', height: '50px', marginRight: '10px'}}>Download</button>
	    </div>
	    <div className="embed-responsive embed-responsive-16by9" style={{width: '90%', height: '90%', marginTop: '50px'}}>
	      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vyPD4pjwq1Q" allowFullScreen></iframe>
	    </div>
	  </section>
	</Aux>
    );
};

export default VRTutorial;
