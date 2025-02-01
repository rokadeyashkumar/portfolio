import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home'; // Import the Home page
import Project from './components/pages/project';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Blog from './components/pages/blog';
import Resource from './components/pages/resource';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will appear on all pages */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
           {/* Project page route */}
           <Route path="/project" element={<Project />} />

           {/* About page route */}
           <Route path="/about" element={<About />} />

           {/* Skill page route */}
           <Route path="/skill" element={<Skill />} />

           {/* Blog page route */}
           <Route path="/blog" element={<Blog />} />

           {/* Blog page route */}
           <Route path="/resource" element={<Resource />} />

          {/* Add more routes for other pages here */}
          {/* Example: <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer /> {/* Footer will appear on all pages */}
      </div>
    </Router>
  );
}

export default App;