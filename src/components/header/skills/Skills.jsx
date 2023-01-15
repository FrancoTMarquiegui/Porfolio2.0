import React from 'react';
import FrontEnd from './FrontEnd.jsx';
import Backend from './Backend.jsx'
import "./skills.css";

const Skills = () => {
  return (
    <section className='skills section' id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <FrontEnd />

        <Backend />
      </div>
    </section>

  );
};

export default Skills;