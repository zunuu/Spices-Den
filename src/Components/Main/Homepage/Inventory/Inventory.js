import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css'
const Inventory = () => {

    const { _id } = useParams();
    // console.log(_id);
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/62767aac23354bf88a4804c6`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    // const { _id, name, supplierName, image, image2, description, price, quantity
    // } = props.eachInventoryDisplay;


    const navigate = useNavigate();
    const navigateToManageInventory = () => {
        navigate('/manageInventory')
        // console.log(`/inventory/${_id}`);
    }
    return (
        <div className='inventoryId'>
            this is inventory detail:{_id}
            {/* {inventory.name}{inventory.supplierName},

            {inventory.image} */}




            <div className=' col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-2 mx-auto justify-content-center inventory-card-div'>
                <Card className='shadow-lg card-of-inventory mx-auto justify-content-center' style={{ width: '30rem' }}>
                    <Carousel fade controls={false}>

                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block  w-100 card-inventory-image2"
                                src={inventory.image}
                                alt="First slide"
                            />

                        </Carousel.Item >
                        <Carousel.Item >
                            <img
                                className="d-block  w-100 card-inventory-image2"
                                src={inventory.image2}
                                alt="Second slide"
                            />

                        </Carousel.Item>

                    </Carousel>
                    {/* <Card.Img variant="top" className='card-image w-100 card-inventory-image' src={image} /> */}
                    <Card.Body className='card-body-of-inventory2'>
                        <Card.Title className='fs-3'>
                            {inventory.name}
                        </Card.Title>
                        <hr />

                        <Card.Title className='fs-4 mb-3 suppliername2'>
                            Supplier Name: {inventory.supplierName}
                        </Card.Title>
                        <Card.Text className='card-descrip2' >
                            <strong className='descrip2'>Description</strong> <br /> {inventory.description}
                        </Card.Text>
                        <div className='d-flex row align-items-center justify-content-center'>
                            <div className='col-8'>
                                <Card.Text className='bg-info w-100 bg-opacity-50 quantity2'>
                                    Price: {inventory.price}

                                </Card.Text>
                                <Card.Text className='bg-warning w-100 bg-opacity-50 quantity2'>
                                    Quantity: {inventory.quantity}
                                </Card.Text>
                                <Card.Text className='fs-4 text-muted w-100 bg-opacity-50 sold'>
                                    Sold: {inventory.sold}
                                </Card.Text>
                            </div>
                            <div className='col-4 mx-auto'>
                                <button onClick={() => navigateToManageInventory(_id)} className='delivered'>Delivered</button>
                            </div>
                        </div>
                        <button
                            onClick={() => navigateToManageInventory(_id)} className='stockbtn mt-3 w-100'>Manage Inventories</button>

                    </Card.Body>

                </Card>
            </div>

        </div>
    );
};

export default Inventory;