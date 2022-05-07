import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './EachInventoryDisplay.css'
const EachInventoryDisplay = (props) => {
    const { name, image, image2, description } = props.eachInventoryDisplay;
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-2 mx-auto justify-content-center'>
            <Card className='card-of-inventory mx-auto justify-content-center' style={{ width: '18rem' }}>
                <Carousel fade controls={false}>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block  w-100 card-inventory-image"
                            src={image}
                            alt="First slide"
                        />

                    </Carousel.Item >
                    <Carousel.Item >
                        <img
                            className="d-block  w-100 card-inventory-image"
                            src={image2}
                            alt="Second slide"
                        />

                    </Carousel.Item>

                </Carousel>
                {/* <Card.Img variant="top" className='card-image w-100 card-inventory-image' src={image} /> */}
                <Card.Body className='card-body-of-inventory'>
                    <Card.Title className='fs-3'>
                        {name}
                    </Card.Title>
                    <Card.Text >
                        {description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
};

export default EachInventoryDisplay;