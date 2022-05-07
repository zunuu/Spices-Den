import React from 'react';
import { Card } from 'react-bootstrap';
import './EachInventoryDisplay.css'
const EachInventoryDisplay = (props) => {
    const { name, image, description } = props.eachInventoryDisplay;
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-2'>
            <Card className='card-of-inventory' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='card-image w-100 card-inventory-image' src={image} />
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