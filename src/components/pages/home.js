import React from 'react';
import Hero from '../content/hero';
import Intro from '../content/intro/intro';
import Tool from '../content/tools/tool';
import Showcase from '../content/showcase/showcase';
import Cta from '../content/cta/cta';
import Frame from '../frame/frame';

import './style/home.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <Tool />
      <Intro />
      <Showcase />
      <Cta />
     <Frame />
    </div>
  );
};

export default Home;