import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar" className="container-fluid z-3 position-absolute">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2 " width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span style={{ color: '#FE8400', fontWeight: 'bold' ,marginLeft:'-35px' }} className="fs-4 ">CARRENT</span>
          </Link>

          <ul className="nav nav-pills" style={{ marginRight: '-10px' }}>
            <li className="nav-item mx-3"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item mx-3"><Link to="/category" className="nav-link">Categories</Link></li>
            <li className="nav-item mx-3">

            {localStorage.getItem('auth-token') ? (<button 

            onClick={()=>{
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            
            }}
            
            
            style={{ backgroundColor: '#FE8400',fontSize:'20px',fontWeight:'500' }} type="button" className="btn">Logout</button>):(
              <Link to='/login'><button style={{ backgroundColor: '#FE8400',fontSize:'20px',fontWeight:'500' }} type="button" className="btn">Login </button></Link>)}

          
              
              
              </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
