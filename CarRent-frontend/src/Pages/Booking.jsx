import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./CSS/Booking.css";
import CarContext from "../Context/CarContext";
import Rating from "../Components/Rating/Rating";

const Booking = () => {
  const { id } = useParams();
  const { all_cars,comments } = useContext(CarContext);

  const selectedCar = all_cars.find((car) => car.id === parseInt(id));
  const customer = localStorage.getItem("customername");
  const customerEmail = localStorage.getItem("customerEmail");

  const [formdata, setFormdata] = useState({
    customer: `${customer}`,
    customerEmail: `${customerEmail}`,
    vehicle: selectedCar.name,

    pickupdate: "YY-MM-DD",
    returndate: "YY-MM-DD",
    pickuplocation: "",
    returnlocation: "",
  });

  const handleBooking = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const booking = async () => {
    await fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
  };

  return (
    <div>
      {" "}
      <div className="booking">
        <div className="carinfo">
          <h1>{decodeURIComponent(selectedCar.name)}</h1>
          <div className="carimage">
            <img src={selectedCar.image} alt="" />
          </div>
        </div>
        <div className="rightside">
          <div className="bookingform">
            <div>
              <label htmlFor="Pickupdate">Pickup Date </label>
              <br />
              <input
                type="Date"
                onChange={handleBooking}
                value={formdata.pickupdate}
                name="pickupdate"
                id="pickupdate"
              />
            </div>
            <div>
              <label htmlFor="returndate">Return Date </label>
              <br />
              <input
                value={formdata.returndate}
                onChange={handleBooking}
                type="Date"
                name="returndate"
                id="returndate"
              />
            </div>
            <div>
              <label htmlFor="pickuplocation">Pickup Location </label>
              <br />
              <input
                value={formdata.pickuplocation}
                onChange={handleBooking}
                type="text"
                name="pickuplocation"
                id="pickuplocation"
              />
            </div>
            <div>
              <label htmlFor="returnlocation">Return Location </label>
              <br />
              <input
                value={formdata.returnlocation}
                onChange={handleBooking}
                type="text"
                name="returnlocation"
                id="returnlocation"
              />
            </div>
            <div>
              <button onClick={booking}>Book Your Ride</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Rating id={selectedCar.id } customername = {customer}/>
        
       
      </div>
    </div>
  );
};

export default Booking;
