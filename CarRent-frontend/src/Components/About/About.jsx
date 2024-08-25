import React from 'react';
import './About.css'
import lambo from './orangelambo.svg'

const About = () => {
  return (
    <div className="container-fluid" id="about" style={{ height: '800px', backgroundColor: '#f5f5f5' }}>
      <h1 className="heading">About Us</h1>

      <div className="row flex align-items-center g-5 py-5">
        <div className="offset-1 col-5">
          <img src={lambo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>

        <div className="col-4">
          <p id="aboutdesc" className="lead">We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. By providing services such as comprehensive insurance ......</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a id="aboutlink" href="">Read More</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
