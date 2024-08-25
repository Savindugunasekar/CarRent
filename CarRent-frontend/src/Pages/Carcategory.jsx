import React, { useContext, useState } from 'react';
import './CSS/Carcategory.css';

import CarItem from '../Components/CarItem/CarItem';
import CarContext from '../Context/CarContext';

const Carcategory = (props) => {

    const { all_cars } = useContext(CarContext);

    const [category, setCategory] = useState('All');
    const [fuel, setFuel] = useState('All');

    const handleCategory = (category) => {
        setCategory(category);
        
    }

    const handleFuel = (fuel) => {
        setFuel(fuel);
    }

    return (
        <div className='carcategory'>
            <div className='buttons'>
            <div className="categoryselect">
                <button onClick={() => {
                    handleCategory('All');
                    handleFuel('All');
                }}>ALL</button>
                <button onClick={() => handleCategory('SUV')}>SUV</button>
                <button onClick={() => handleCategory('GT')}>GT</button>
                <button onClick={() => handleCategory('hatch')}>Hatch</button>
            </div>

            <div className='fuelselect'>
                <button onClick={() => handleFuel('Electric')}>EV</button>
                <button onClick={() => handleFuel('gasoline')}>ICE</button>
            </div>
            </div>

            

            <div className='carlist'>
               {localStorage.getItem('auth-token')?(
                all_cars
                    .filter((car) => (category === 'All' || car.category === category) && (fuel === 'All' || car.fuel === fuel))
                    .map((car, i) => (
                        <CarItem
                            key={i}
                            id={car.id}
                            name={car.name}
                            passengers={car.passengers}
                            dailyrate={car.dailyrate}
                            image={car.image}
                            fuel={car.fuel}
                            category={car.category}
                        />
                    ))
               ):(<p>Log in first</p>)}
                
            </div>
        </div>
    );
}

export default Carcategory;
