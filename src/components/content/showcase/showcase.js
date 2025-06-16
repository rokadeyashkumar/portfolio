import React from 'react';
import '../showcase/showcase.scss';

const IMAGE_BASE = "https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/showcase/";

const row1 = ['1.jpg','2.jpg','3.jpg'];
const row2 = ['4.jpg','5.jpg','6.jpg'];
const row3 = ['7.jpg','8.jpg','9.jpg'];

const Showcase = () => (
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
        {[row1, row2, row3].map((row, i) => (
          <div key={i} className={`marquee-line ${['top-line', 'middle-line', 'bottom-line'][i]}`}>
            {row.concat(row).map((fname, idx) => (
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

export default Showcase;
