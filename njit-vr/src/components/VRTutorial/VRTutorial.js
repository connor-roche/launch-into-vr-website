import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import logo from '../../assets/images/logo-large.png';

const VRTutorial = (props) => {

    return (
	<Aux>
	  <section className="d-flex justify-content-center container">
	    <img src={logo}/>
	  </section>
	</Aux>
    );
};

export default VRTutorial;
