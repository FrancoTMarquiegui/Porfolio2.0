import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">


      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 months at Academlo</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">I have 10 completed projects that you can see my code in git hub or in the projects section</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support' ></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">24 hour availability</span>
      </div>


    </div>
  );
};

export default Info;