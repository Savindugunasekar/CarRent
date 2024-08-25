import React from 'react';
import './Service.css'
import hrs from './24.png'
import Guarantee from './Guarantee.png'
import target from './target.png'


const Service = () => {
  return (
    <div id="blackportion" style={{ marginBottom: '200px' }}>
      <h1 className="heading" style={{ color: '#f5f5f5', marginBottom: '50px' }}>Our Premium Services</h1>
      <div id="serviceinfo">Carent is a reputable car rental company that offers a wide range of useful services for every taste.</div>
      <div id="servicecontainer" style={{ display: 'flex' }}>
        <div className="card mb-3" style={{ width: '20rem' }}>
          <div className="card-body">
            <img src={hrs} height="100px" width="100px" alt="" />
            <h4 className="card-title" style={{ margin: '20px 0' }}>24 Hour Support</h4>
            <p style={{ fontSize: '15px', fontWeight: '400', maxWidth: '200px', margin: '0 auto', color: '#575757' }} className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div className="card mb-3" style={{ width: '20rem' }}>
          <div className="card-body">
            <img src={Guarantee} height="100px" width="100px" alt="" />
            <h4 className="card-title" style={{ margin: '20px 0' }}>Qualified Assurance</h4>
            <p style={{ fontSize: '15px', fontWeight: '400', maxWidth: '200px', margin: '0 auto', color: '#575757' }} className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div className="card mb-3" style={{ width: '20rem' }}>
          <div className="card-body">
            <img src={target} height="100px" width="100px" alt="" />
            <h4 className="card-title" style={{ margin: '20px 0' }}>GPS on Cars</h4>
            <p style={{ fontSize: '15px', fontWeight: '400', maxWidth: '200px', margin: '0 auto', color: '#575757' }} className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
