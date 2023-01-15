import React, { useState } from 'react';
import "./service.css";
import IMG1 from '../../../assets/img-Ecommerce.png';
import IMG2 from '../../../assets/img__pokedex.png';
import IMG3 from '../../../assets/image 2.png';

const Services = () => {

  const [ toggleState, setToggleState ]= useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='services section' id='services'>
      <h2 className="section__title">Projects</h2>
      <spant className="section__subtitle">what i offer</spant>

      <div className="services__container container grid">
        <div className="services__content">
          <div className='img__content'>
          <img src={IMG1} alt="" />
          </div>
          <a className='View__more__services' href="https://golden-custard-a026e8.netlify.app">View More</a>

        </div>

        <div className="services__content">
          <div className='img__content'>
          <img src={IMG2} alt="" />
          </div>
          <a className='View__more__services' href="https://brilliant-seahorse-3b043b.netlify.app">View More</a>

        </div>

        <div className="services__content">
          <div className='img__content'>
          <img src={IMG3} alt="" />
          </div>
          <a className='View__more__services' href="https://jovial-dasik-b7840a.netlify.app">View More</a>

        </div>
      </div>
    </section>
  );
};

export default Services;