import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import Project from './components/pages/project';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import Resource from './components/pages/resource';
import UnderDevelopment from './components/underdevpg/Under-development';
import Footer from './components/footer/footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Fallback Route */}
          <Route path="/*" element={<UnderDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
