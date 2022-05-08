import React from 'react';
import './Advertising.css'
const Advertising = () => {
    return (
        <div>
            <div className='advertising'>
                <div className='background-advert'>
                    <h2 className='customerNumber'>7</h2>
                    <h2 className='million'>Million users</h2>
                    <p className='grow-business fs-5'>Grow their Business with Spices-Den</p>
                </div>
            </div>
            <div className='startsNow pt-4'>
                <h2>Unleash your growth potential</h2>
                <button className='startsNowBtn'>Start Now - It's Free</button>
            </div>
        </div>
    );
};

export default Advertising;