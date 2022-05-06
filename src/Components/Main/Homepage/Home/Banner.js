import { Button } from 'bootstrap';
import React from 'react';
import image1 from './../../../../Images/Banner/1.jpg'
import image2 from './../../../../Images/Banner/2.jpg'
import image3 from './../../../../Images/Banner/pexels-tiger-lily-4483610.jpg'
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-0 banner'>
            <Carousel fade controls={false}>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block  w-100 "
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Masalas</h3>
                        <p> Proper place for store spice products with proper monitoring and packaging</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block  w-100 "
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Barrel Packaging</h3>
                        <p>Barrel Packaging is the best way to store product for the long time</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block  w-100 "
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Warehouse</h3>
                        <p>One of the biggest warehouse in the city</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;