import React from 'react';
import Hero from '../content/hero';
import Tool from '../content/tools/tool';
import Frame from '../frame/frame';

const Home = () => {
  return (
    <div>
      <Hero />
      <Tool />
      <Frame />

      <div className='gallery'>
      <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img>
      </div>
    </div>
  );
};

export default Home;