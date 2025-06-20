import React, { useState, useEffect } from 'react';
import '../frame/frame.scss';
import './style/skill.scss';

const SKILLS_URL = 'https://raw.githubusercontent.com/rokadeyashkumar/portfolio-data/main/skills/skills.json';

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(SKILLS_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load skills');
        return res.json();
      })
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="content">
      <div className="content-inner">
        <h2 className="skill-title">Skills That Make Me Stand Out</h2>
        <div className="skill-container">
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div className="skill-row" key={i}>
                <img src={skill.url} alt={skill.name} />
                <div className="skill-text">
                  <div className="skill-headline">{skill.name}</div>
                  <p className="skill-des">{skill.desc}</p>
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
