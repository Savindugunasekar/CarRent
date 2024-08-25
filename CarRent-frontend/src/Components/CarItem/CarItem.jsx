import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CarItem.css';
import fuel from './icons/fuel.png';
import passengers from './icons/Tesla Model 3.png';
import user from './icons/User.png';

const CarItem = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#d76f00';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#FE8400';
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img style={{ margin: '0', borderRadius: '5px', height: '200px', objectFit: 'cover' }} src={props.image} />
      <div className="card-body">
        <h5 className="card-title" style={{ marginBottom: '10px' }}>{props.name}</h5>
        <div className="info">
          <div className="passengers" >
            <img src={user} height="16px" width="16px" alt="" />
            {props.passengers}
          </div>
          <div className="passengers">
            <img src={fuel} height="16px" width="16px" alt="" />
            {props.fuel}
          </div>
          <div className="passengers">
            <img src={passengers} height="16px" width="16px" alt="" />
            {props.category}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <p className="card-text">Daily rate from <br /><strong>${props.dailyrate}</strong></p>
          <Link to={`/booking/${props.id}`}>
            <a href="#" className="btn btn-primary" type='button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: '#FE8400', border: 'none', color: 'black' }}>Book Now</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
