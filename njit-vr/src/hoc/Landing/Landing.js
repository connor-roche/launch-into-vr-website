import React from 'react';

import Aux from '../Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import VRTutorial from '../../components/VRTutorial/VRTutorial';
import Footer from '../../components/Footer/Footer';

const Landing = () => (
    <Aux>
      <Navbar />
      <VRTutorial />
      <Footer />
    </Aux>
);

export default Landing;
