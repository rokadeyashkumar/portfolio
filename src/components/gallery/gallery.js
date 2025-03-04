import React from "react";
import './gallery.scss';

const images = [
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ",
  "https://i.ytimg.com/vi/gNvNE2Si4Qs/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDSTdJfIMlc732fuYjSsyeANypHfQ"
];

const Gallery = () => {
  const handleScroll = (direction) => {
    const gallery = document.querySelector(".gallery");
    if (direction === "left") {
      gallery.scrollBy({ left: -900, behavior: "smooth" }); // Scroll left
    } else {
      gallery.scrollBy({ left: 900, behavior: "smooth" }); // Scroll right
    }
  };

  return (
    <div>
      <div className='gallery-content'>
        <p className="gallery-top">Milestones</p>
        <h1 className='gallery-main'>Key Moments in My Journey.</h1>
        <p className="gallery-bottom">Browse the Framer academy, blog, and community to get you started with Framer.</p>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} />
          ))}
        </div>

        {/* Left and Right Buttons */}
        <button className="gallery-button left" onClick={() => handleScroll("left")}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
</svg>

        </button>
        <button className="gallery-button right" onClick={() => handleScroll("right")}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
</svg>

        </button>
      </div>
    </div>
  );
};

export default Gallery;