import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../cta/cta.scss';
import msgImage from '../msg.png'; // Import the image

const Cta = () => {
  const [ctaContent, setCtaContent] = useState("");

  // Fetch the about-me.md file from GitHub
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/cta.md")
      .then((response) => response.text())  // Get the text of the markdown
      .then((data) => setCtaContent(data)) // Store the content in the state
      .catch((error) => console.error("Error fetching markdown:", error)); // Error handling
  }, []);

  return (
    <div>
      {/* Display the fetched content */}
      <div className="cta-markdown">
        <img src={msgImage} alt="Message" /> {/* Use the imported image */}
        <ReactMarkdown>{ctaContent}</ReactMarkdown>
        <a href=''>Learn more &#8250; </a>
      </div>
    </div>
  );
};

export default Cta;