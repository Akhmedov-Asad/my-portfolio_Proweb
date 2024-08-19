import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Image1 from '../src/assets/food100.png';
import Image2 from '../src/assets/paralax.jpg';
import Image3 from '../src/assets/zone.png';
import Logotip from '../src/assets/Logotips.png'
import Services1 from '../src/assets/services1.png'
import Services2 from '../src/assets/services2.png'
import Services3 from '../src/assets/services3.png'
// import aboutImage from '../src/assets/aboutMe/png'; // Corrected import path


function App() {
  return (
    <div>
      <div className="App">
        <header>
          <div>
            <h1>Portfolio Creator<span>.</span></h1>
          </div>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
            <li>Blog</li>
            <li>Book a call</li>
          </ul>
          <h3>AdolpHitler03@gmail.com</h3>
        </header>
        <div className="container">
          <section className="about-me">
            <div className='about-me_title'>
              <h1 className='a-m_h1'>
                <span>I design products</span> that delight and inspire people.
              </h1>
              <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
              <div className='a-m_button'>
                <button className='a-m_b1'>Book a call</button>
                <button className='a-m_b2'>Download CV</button>
              </div>
            </div>
            <div className='about-me_image'>
              {/* <img src={aboutImage} alt="aboutImage" />
             */}

              image
            </div>
          </section>

          <section className="Logo-sec">
            <h4>Trusted by</h4>
            <div>
              <img src={Logotip} alt="image" />
            </div>
          </section>

          <section className='services'>
            <h3>Services</h3>
            <h1>Design that solves problems, one product at a time.</h1>

            <ul>
              <li>
                <img src={Services1} alt="services_image" />
                <h4>What I can do for you</h4>
                <p>Faster, better products that your users love. Here's all the services I provide:</p>
                <ol>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                </ol>
              </li>
              <li>
                <img src={Services2} alt="services_image" />
                <h4>Applications I'm fluent in</h4>
                <p>Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
                <ol>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                </ol>
              </li>
              <li>
                <img src={Services3} alt="services_image" />
                <h4>What you can expect</h4>
                <p>I design products that are more than pretty. I make them shippable and usable.</p>
                <ol>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                  <li>Design Strategy</li>
                </ol>
              </li>
            </ul>
          </section>

          <section className="portfolio">
            <div className='projects_div'>
              <div>
                <h4>PROJECTS</h4>
                <h2>I bring results.
                  My clients are proof.</h2>
              </div>
              <button>View all projects</button>
            </div>
            <TransitionGroup className="image-wrapper">
              <CSSTransition timeout={500} classNames="item">
                <div className='image1'>
                  <img src={Image1} alt="Image 1" />
                  <p>Branding</p>
                  <h3>Soulful Rebrand</h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
              <CSSTransition timeout={500} classNames="item">
                <div className='image2'>
                  <img src={Image2} alt="Image 2" />
                  <p>Product Design</p>
                  <h3>Datadash Product design</h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
              <CSSTransition timeout={500} classNames="item">
                <div className='image3'>
                  <img src={Image3} alt="Image 3" />
                  <p>Web Design</p>
                  <h3>
                    Maize Website Design
                  </h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
              <CSSTransition timeout={500} classNames="item">
                <div className='image1'>
                  <img src={Image1} alt="Image 1" />
                  <p>Branding</p>
                  <h3>Soulful Rebrand</h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
              <CSSTransition timeout={500} classNames="item">
                <div className='image2'>
                  <img src={Image2} alt="Image 2" />
                  <p>Product Design</p>
                  <h3>Datadash Product design</h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
              <CSSTransition timeout={500} classNames="item">
                <div className='image3'>
                  <img src={Image3} alt="Image 3" />
                  <p>Web Design</p>
                  <h3>
                    Maize Website Design
                  </h3>
                  <span>View Project</span>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </section>


        </div>
      </div>
      <section className="latest_blogs">
        <div className='latest_blogs_item'>
          <div className='lbi_1'>
            <p>BLOGS</p>
            <h2>Latest Blogs</h2>
            <span>View all - </span>
          </div>
          <div className='lbi_2'>
            <ul>
              <li>
                <p>April 16, 2021
                  6 mins</p>
                <h3>Design tips for designers, that cover everything you need</h3>
                <span>Read the article</span>
              </li>
              <li>
                <p>April 16, 2021
                  6 mins</p>
                <h3>Design tips for designers, that cover everything you need</h3>
                <span>Read the article</span>
              </li>
              <li>
                <p>April 16, 2021
                  6 mins</p>
                <h3>Design tips for designers, that cover everything you need</h3>
                <span>Read the article</span>
              </li>
              <li>
                <p>April 16, 2021
                  6 mins</p>
                <h3>Design tips for designers, that cover everything you need</h3>
                <span>Read the article</span>
              </li>
              <li>
                <p>April 16, 2021
                  6 mins</p>
                <h3>Design tips for designers, that cover everything you need</h3>
                <span>Read the article</span>
              </li>
          
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;