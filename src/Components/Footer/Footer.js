import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='align-items-center d-flex bg-dark text-white row justify-content-center mx-auto pt-4 pb-4'>
            <div>
                <h4>LET'S STAY IN TOUCH</h4>
                <p>
                    <small>Send your email to get weekly Newsletter</small>

                </p>
                <form className='mb-4' action="">
                    <input className='formInput' type="email" name="" id="" />
                    <button className='formBtn' type="submit">Submit</button>
                </form>
            </div>
            <div className='col-xl-9'>
                <div className='d-flex bg-dark text-white row justify-content-center mx-auto text-start'>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12 mx-auto justify-content-center my-3'>
                        <h5 className=''>Company</h5>
                        <li>Inventory Den</li>
                        <li>Spices Den</li>
                        <li>Career</li>
                        <li>About</li>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12   justify-content-center  my-3'>
                        <h5>Get Help</h5>
                        <li>Help Center</li>
                        <li>FAQ</li>
                        <li>Blogs</li>
                        <li>General Information</li>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12  justify-content-center my-3'>
                        <h5>Contact</h5>
                        <li><span className='fs-4'>⚐</span> &nbsp; Planet Earth</li>
                        <li><span className='fs-5'>☏</span>&nbsp; +8801760000000</li>
                        <li><span className='fs-6'>✉</span> &nbsp;spicesden@inventoryden.com</li>
                        <li><span className='fs-5'>☁</span>&nbsp;www.spicesden.com</li>

                    </div>

                </div>
            </div>
            <div className='col-xl-2 brandNameFooter'>
                <h2 className='brandName '>Spices<span className='fs-2'>🌶️</span>Den</h2>
            </div>
            <hr className='w-100 text-white' />
            <small className='text-muted'>&copy;2022 Copyright Spices-den.com</small>
        </div>
    );
};

export default Footer;