import React from "react";
import './gallery.scss';

const BASE_URL = "https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/my-img/";
const filenames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Repeat images to ensure total 8 items
const totalImages = 8;
const images = Array.from({ length: totalImages }, (_, i) => `${BASE_URL}${filenames[i % filenames.length]}`);

const Gallery = () => {
  const handleScroll = (direction) => {
    const gallery = document.querySelector(".gallery");
    const scrollAmount = window.innerWidth < 768 ? 300 : 900;
    gallery.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div>
      <div className='gallery-content'>
        <p className="gallery-top">Milestones</p>
        <h1 className='gallery-main'>Key Moments in My Journey</h1>
        <p className="gallery-bottom">Each frame captures a milestone from creative sparks to real-world impact.</p>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} />
          ))}
        </div>

        <button className="gallery-button left" onClick={() => handleScroll("left")}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
          </svg>
        </button>
        <button className="gallery-button right" onClick={() => handleScroll("right")}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
