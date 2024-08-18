import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Image1 from '../src/assets/food100.png';
import Image2 from '../src/assets/paralax.jpg';
import Image3 from '../src/assets/zone.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <h3>AdolpHitler03@gmail.com</h3>
      </header>
      <div className="container">
        <section className="about-me">
          <h2>About Me</h2>
          <p>Insert information about yourself here.</p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Frontend Development</li>
            <li>React.js</li>
            <li>HTML/CSS/JavaScript</li>
            <li>Responsive Web Design</li>
          </ul>
        </section>

        <section className="portfolio">
          <h2>My Work</h2>
          <TransitionGroup className="image-wrapper">
            <CSSTransition timeout={500} classNames="item">
              <div className='image1'>
                <img src={Image1} alt="Image 1" />
                <p>Website 'Food100' for fast food lovers</p>
              </div>
            </CSSTransition>
            <CSSTransition timeout={500} classNames="item">
              <div className='image2'>
                <img src={Image2} alt="Image 2" />
                <p>Stunning nature photography 'Parallax'</p>
              </div>
            </CSSTransition>
            <CSSTransition timeout={500} classNames="item">
              <div className='image3'>
                <img src={Image3} alt="Image 3" />
                <p>Revolutionary 'Virtual Reality Business Solutions'</p>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Personal Blog Website</li>
            <li>E-commerce Website</li>
            <li>Portfolio Website</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;