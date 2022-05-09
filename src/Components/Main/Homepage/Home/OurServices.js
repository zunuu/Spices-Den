import React from 'react';
import { Card } from 'react-bootstrap';
import './OurServices.css'
const OurServices = () => {
    return (
        <div className='ourServices px-0 pt-5'>
            <h2 className='m-0 pb-5 d-flex align-items-center justify-content-center p-0'><hr className='w-25' />&nbsp;Our Services&nbsp;<hr className='w-25' /></h2>
            <div className='d-flex justify-content-center px-3 row m-0'>
                <div className='col-xl-3 mb-3 mx-2  warehousing col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon pt-0 px-0'>Warehousing</h3>
                </div>
                <div className='col-xl-3 mb-3 mx-2 packaging col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon2 pt-0 px-0'>Packaging</h3>
                </div>
                <div className='col-xl-3 mb-3 mx-2 transport col-lg-4 col-md-6 col-sm-12 col-12'>
                    <h3 className='icon3 pt-0 px-0'>Transportation</h3>
                </div>

            </div>
        </div>
    );
};

export default OurServices;