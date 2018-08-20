import React, {Component} from 'react';

import classes from './Footer.css';

class Footer extends Component {

    state = {
	style: {}
    }

    componentDidMount () {
	const screenHeight = window.innerHeight;
	const contentHeight = document.body.clientHeight - document.querySelector('footer').clientHeight;
	console.log('screen height:' + screenHeight, 'content height:' + contentHeight);
	if (contentHeight < (screenHeight - ( document.querySelector('footer').clientHeight+ 70)))
	    this.setState({style: {position: 'absolute',
				   right: '0',
				   left: '0',
				   bottom: '0'}});
    }

    render () {
	return (
	    <footer className={[classes.footer, "row align-items-center container-fluid no-gutters"].join(' ')} style={this.state.style}>
	      <div className="col-sm-3 text-center">&copy; NJIT Capstone Robotics</div>
	      <a className={[classes.githubLink, "col-sm-1 text-center"].join(' ')} href="https://github.com/connor-roche/launch-into-vr-website">Github</a>
	      <div className="col-sm-3 offset-sm-5 d-flex justify-content-center">
		<button type="button" className="btn btn-outline-dark">Download</button>
	      </div>
	    </footer>
	);
    }
    
};

export default Footer;
