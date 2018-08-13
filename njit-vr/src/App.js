import React, { Component } from 'react';

import VRTutorial from './components/VRTutorial/VRTutorial';
import Navbar from './components/Navbar/Navbar';
import Aux from './hoc/Aux/Aux';

class App extends Component {
    render() {
	return (
	    <Aux>
	      <Navbar />
	      <VRTutorial />
	    </Aux>
	);
    }
}

export default App;
