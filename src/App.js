import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/content/hero';
import Footer from './components/footer/footer';  // Assuming you have a Footer component
import Frame from './components/frame/frame';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
