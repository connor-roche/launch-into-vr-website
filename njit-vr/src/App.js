import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import VRTutorial from './components/VRTutorial/VRTutorial';
import Navbar from './components/Navbar/Navbar';
import Aux from './hoc/Aux/Aux';

class App extends Component {
    render() {
	return (
	    <BrowserRouter>
	      <Aux>
		<Navbar />
		<VRTutorial />
	      </Aux>
	    </BrowserRouter>
	);
    }
}

export default App;
