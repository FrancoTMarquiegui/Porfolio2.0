import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="quailification section">
      
      <h2 className="section__title">Education</h2>
      <spant className="section__subtitle">what i offer</spant>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualificacion__active button--flex">
            <i className="uil uil-graduatino-cap qualification__icon"></i> {" "}Estudios
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-graduatino-cap qualification__icon"></i>{" "} 
          </div>
        </div>

        <div className="qualification__section">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Academlo</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                  </i> 30/08/2022 - Present
                </div>

                

              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Academlo</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                  </i> 30/08/2022 - Present
                </div>

              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>
              <div>
                <h3 className="qualification__title">Front-End Developer</h3>
                <span className="qualification__subtitle">Academlo</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                  </i> 30/08/2022 - Present
                </div>

              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

              </div>
              <div>
                <h3 className="qualification__title">Back-End Developer</h3>
                <span className="qualification__subtitle">Academlo</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">
                  </i> 30/08/2022 - Present
                </div>
               

              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
