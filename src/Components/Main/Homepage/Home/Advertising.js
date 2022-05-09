import React from 'react';
import { Link } from 'react-router-dom';
import './Advertising.css'
const Advertising = () => {
    return (
        <div className='mt-4'>
            <h2 className='m-0 pb-5 d-flex align-items-center justify-content-center p-0'><hr className='w-25' />&nbsp;Grow Your Business&nbsp;<hr className='w-25' /></h2>
            <div className='advertising'>
                <div className='background-advert'>
                    <h2 className='customerNumber'>7</h2>
                    <h2 className='million'>Million users</h2>
                    <p className='grow-business fs-5'>Grow their Business with Spices-Den</p>
                </div>
            </div>
            <div className='startsNow pt-4'>
                <h2>Unleash your growth potential</h2>
                <button className='startsNowBtn'><Link className='startNow' to='/signIn'>Start Now - It's Free</Link></button>
            </div>
        </div>
    );
};

export default Advertising;