import React from 'react';
import { Card } from 'react-bootstrap';
import './OurServices.css'
const OurServices = () => {
    return (
        <div className='ourServices pt-5'>
            <h2 className='m-0 p-0'>Our Services</h2>
            <div className='d-flex row m-0'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon'>Warehousing</h3>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon2'>Packaging</h3>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon3'>Transportation</h3>
                </div>

            </div>
        </div>
    );
};

export default OurServices;