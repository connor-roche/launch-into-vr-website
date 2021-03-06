import React from 'react';

import Aux from '../Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import LandingContent from '../../components/LandingContent/LandingContent';
import Footer from '../../components/Footer/Footer';

const Landing = () => (
    <Aux>
      <Navbar />
      <LandingContent />
      <Footer />
    </Aux>
);

export default Landing;
