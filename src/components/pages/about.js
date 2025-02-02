import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../frame/frame.scss';
import './style/about.scss';

const About = () => {
  const [aboutContent, setAboutContent] = useState("");

  // Fetch the about-me.md file from GitHub
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rokadeyashkumar/about-me/main/about/about-me.md")
      .then((response) => response.text())  // Get the text of the markdown
      .then((data) => setAboutContent(data)) // Store the content in the state
      .catch((error) => console.error("Error fetching markdown:", error)); // Error handling
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <p className="about-top">About me</p>
          <h1 className="about-h1">I’m Yashkumar Rokade.</h1>
          {/*<h1>The web builder for stunning sites.</h1>*/}
          <p className="about-bottom">
            A UI/UX Designer and Software Engineer with a passion for building
            intuitive and beautiful products.
          </p>
        </div>
      </div>

      {/* Display the fetched content */}
      <div className="about-markdown">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>

      <div className="content">
        <div className="content-inner">
          
        </div>
      </div>
    </div>
  );
};

export default About;
