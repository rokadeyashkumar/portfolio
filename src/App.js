import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';  // Assuming you have a Footer component
import Frame from './components/frame/frame';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="main-content">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a short description of what I do</p>
          {/* Add more content here */}
          <Frame />
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;
