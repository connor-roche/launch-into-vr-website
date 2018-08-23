import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Aux from './hoc/Aux/Aux';
import Landing from './hoc/Landing/Landing';
import About from './hoc/About/About';
import Downloads from './hoc/Downloads/Downloads';
import Documentation from './hoc/Documentation/Documentation';
{/* import DoxDocumentation from './components/DoxDocumentation/DoxDocumentation'; */}

class App extends Component {
    
    render() {
	return (
	    <BrowserRouter>
	      <Aux>
		<Route path="/" exact component={Landing} />
		<Route path="/about" exact component={About} />
		<Route path="/downloads" exact component={Downloads} />
		<Route path="/documentation" exact component={Documentation}/>
		{/* <Route path="/dox-documentation" exact component={DoxDocumentation} /> */}
	      </Aux>
	    </BrowserRouter>
	);
    }
}

export default App;
