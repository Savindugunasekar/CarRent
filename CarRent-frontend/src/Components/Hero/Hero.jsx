import React from 'react';
import amg from './Car.svg'
import './Hero.css'

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id="hero" >
      <div id="hero-section" className="container-fluid ">
        {/* First Row (Image) */}
        <div style={{ position: 'relative', zIndex: 0 }} className="row">
          <div className="offset-4 col-8">
            <img
              src={amg}
              className="d-block img-fluid "
              style={{ marginRight: '200px' }}
              alt="Bootstrap Themes"
              width="1200"
              height="800"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Second Row (Hello world) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, color: 'white', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} className="col-6 offset-2">
          <h1  className="display-5 fw-bold  lh-1 mb-3 ">Enjoy your life with</h1>
          <h1  className="display-5 fw-bold  lh-1 mb-3">our comfortable</h1>
          <h1 className="display-5 fw-bold  lh-1 mb-3">cars.</h1>
          <p style={{ color: 'white', marginBottom: '1px' }} className="lead">Carent, is ready to serve the best</p>
          <p style={{ color: 'white' }} className="lead">experience in car rental.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <Link to='/category'><button style={{ backgroundColor: '#FE8400', color: 'black' }} type="button" className="btn btn-lg">Explore Now</button></Link>   
          </div>
        </div>
        <div className="col-6">
          {/* You can add more content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
