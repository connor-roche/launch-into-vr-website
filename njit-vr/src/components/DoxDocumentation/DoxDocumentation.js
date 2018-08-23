import React, {Component} from 'react';

import dox from '../../assets/Documentation/html/index.html';
var htmlDoc = {__html: dox};

class DoxDocumentation extends Component {
    
    render () {
	return (
	    <div dangerouslySetInnerHTML={htmlDoc}/>
	);
    }
    
};

export default DoxDocumentation;
