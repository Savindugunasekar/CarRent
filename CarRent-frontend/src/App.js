import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Carcategory from './Pages/Carcategory.jsx';
import Login from './Pages/Login.jsx';
import Booking from './Pages/Booking.jsx';
import Rating from './Components/Rating/Rating.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Carcategory />} />
          <Route path='/login' element={<Login />} />
        
          
        
          <Route path='/booking/:id' element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
