import React from 'react';
import '../frame/frame.scss';
import './style/skill.scss';

const skills = [
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/figma.png?raw=true",
    name: "Figma",
    desc: "UI/UX Design Tool"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/html.png?raw=true",
    name: "HTML",
    desc: "Markup Language"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/css.png?raw=true",
    name: "CSS",
    desc: "Styling Layouts"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/scss.png?raw=true",
    name: "SCSS",
    desc: "Advanced CSS"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/react.png?raw=true",
    name: "React",
    desc: "Frontend Library"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/node.png?raw=true",
    name: "Node.js",
    desc: "Backend Runtime"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/php.png?raw=true",
    name: "PHP",
    desc: "Server Scripting"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/photoshop.png?raw=true",
    name: "Photoshop",
    desc: "Image Editing"
  },
  {
    url: "https://github.com/rokadeyashkumar/portfolio-data/blob/main/tool-icon/llustrator.png?raw=true",
    name: "Illustrator",
    desc: "Vector Design"
  }
];

const Skill = () => {
  return (
    <div className="content">
      <div className="content-inner">
        <h2 className="skill-title">Skills That Make Me Stand Out</h2>

        <div className="skill-container">
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={index}>
                <img src={skill.url} alt={skill.name} />
                <div className="skill-text">
                  <div className="skill-headline">{skill.name}</div>
                  <p className="skill-des">Creative tool</p> {/* update per skill */}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
