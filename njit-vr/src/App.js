import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import classes from './App.css';
import VRTutorial from './components/VRTutorial/VRTutorial';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Aux from './hoc/Aux/Aux';

class App extends Component {
    render() {
	return (
	    <BrowserRouter>
	      <Aux className={classes.app}>
		<Navbar />
		<VRTutorial />
		<Footer />
	      </Aux>
	    </BrowserRouter>
	);
    }
}

export default App;
