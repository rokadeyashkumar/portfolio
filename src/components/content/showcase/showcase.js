import React from 'react';
import '../showcase/showcase.scss';

const IMAGE_BASE = "https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/showcase/";

const allImages = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg',
  '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'
];

// Helper to shuffle and return a new array
const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Generate infinite randomized image sets for each row
const generateRowImages = (excluded = []) => {
  const filtered = allImages.filter(img => !excluded.includes(img));
  const randomImages = shuffle(filtered);
  return [...randomImages, ...shuffle(filtered)]; // duplicate for looping
};

const Showcase = () => {
  const row1 = generateRowImages();
  const row2 = generateRowImages(row1.slice(0, 4)); // exclude first few from row1
  const row3 = generateRowImages([...row1.slice(0, 2), ...row2.slice(0, 2)]); // exclude overlap

  const rows = [row1, row2, row3];

  return (
    <div className='creative-section'>
      <div className='content-showcase'>
        <h2>Bringing Your Vision to Life Through Design.</h2>
        <p>
          From concept to execution, I transform ideas into stunning digital experiences.
          Explore my creative journey through design, development, and the resources I share.
        </p>
      </div>

      <div className="gradient-overlay"></div>

      <div className='image-showcase'>
        <div className="marquee-wrapper">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`marquee-line ${['top-line', 'middle-line', 'bottom-line'][i]}`}
            >
              {row.map((fname, idx) => (
                <img
                  key={`${i}-${idx}`}
                  src={`${IMAGE_BASE}${fname}`}
                  alt={`Showcase ${fname}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
