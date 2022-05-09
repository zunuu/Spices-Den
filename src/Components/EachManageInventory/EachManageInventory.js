import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EachManageInventory.css'
import InventoryHook from '../Hooks/InventoryHook'
import EachInventoryDisplay from '../EachInventoryDisplay/EachInventoryDisplay';
const EachManageInventory = (props) => {
    const { _id, name, supplierName, image, image2, description, price, quantity
    } = props.eachInventoryDisplay;
    const navigate = useNavigate();
    const navigateToInventory = (_id) => {
        navigate(`/inventory/${_id}`)
        // console.log(`/inventory/${_id}`);
    }

    const [eachInventory, setEachInventory] = InventoryHook();
    const handleDelete = _id => {
        const confirmDelete = window.confirm("Are sure to delete?");
        if (confirmDelete) {
            const url = (`https://desolate-meadow-44441.herokuapp.com/inventory/${_id}`);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    window.location.reload();
                    // const remaining = EachInventoryDisplay.filter
                })
        }
    }
    return (
        <div className=' col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-4 mx-auto justify-content-center'>
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
                    <hr />

                    <Card.Title className='fs-6 mb-3 suppliername'>
                        Supplier Name: {supplierName}
                    </Card.Title>
                    <Card.Text className='card-descrip' >
                        <strong className='descrip'>Description</strong> <br /> {description}
                    </Card.Text>
                    <Card.Text className='bg-info w-100 bg-opacity-50 quantity'>
                        Price: {price}

                    </Card.Text>
                    <Card.Text className='bg-warning w-100 bg-opacity-50 quantity'>
                        Quantity: {quantity}
                    </Card.Text>
                    {/* <button onClick={() => navigateToInventory(_id)} className='stockbtn mb-2'>Stock Update</button>
                    <br /> */}
                    <button onClick={() => handleDelete(_id)} className='{mt-5 p-2 rounded eachdeletebtn}'>Delete</button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default EachManageInventory;