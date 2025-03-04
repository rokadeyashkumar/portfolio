import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../intro/intro.scss';

const Intro = () => {
    const [introContent, setIntroContent] = useState("");

    // Fetch the about-me.md file from GitHub
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/about-me/intro.md")
            .then((response) => response.text())  // Get the text of the markdown
            .then((data) => setIntroContent(data)) // Store the content in the state
            .catch((error) => console.error("Error fetching markdown:", error)); // Error handling
    }, []);

    return (
        <div>
            {/* Display the fetched content */}
            <div className="intro-markdown">
                <ReactMarkdown>{introContent}</ReactMarkdown>
                <a href=''>Learn more &#8250; </a>
            </div>
        </div>
    )
}
export default Intro;