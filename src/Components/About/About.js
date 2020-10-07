import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='about-image'>
      </div>
      <div className='about-info'>
        <div className='about-intro'>
          <h3>Intro</h3>
          <p>I am an Economics and Finance graduate from University of Bristol and a Software Engineer in Training at Futurepoof. In addition to Futureproof, I have played water polo for Great Britain and currently coach two highly successful teams at Imperial College London.</p>
        </div>
        <div className='about-skills'>
          <h3>Skills</h3>
          <div className='skill-icons'>
            <i className="fab fa-html5 fa-5x"></i>
            <i className="fab fa-css3 fa-5x"></i>
            <i className="fab fa-js fa-5x"></i>
            <i className="fab fa-node-js fa-5x"></i>
            <i className="fab fa-react fa-5x"></i>
            <div className='icon-image'>
            <iconify-icon data-icon="simple-icons:redux" data-width="80" data-height="80"></iconify-icon>
            </div>
            <i className="fab fa-python fa-5x"></i>
            <div className='icon-image'>
              <iconify-icon className='icon-image' data-icon="cib:flask" data-width="80" data-height="80"></iconify-icon>
            </div>
            <div className='icon-image'>
              <iconify-icon className='icon-image' data-icon="carbon:sql" data-width="80" data-height="80"></iconify-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
