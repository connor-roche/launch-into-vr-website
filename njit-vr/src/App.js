import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Aux from './hoc/Aux/Aux';
import Landing from './hoc/Landing/Landing';
import About from './hoc/About/About';
import Downloads from './hoc/Downloads/Downloads';

class App extends Component {
    
    render() {
	return (
	    <BrowserRouter>
	      <Aux>
		<Route path="/" exact component={Landing} />
		<Route path="/about" exact component={About} />
		<Route path="/downloads" exact component={Downloads} />
	      </Aux>
	    </BrowserRouter>
	);
    }
}

export default App;
