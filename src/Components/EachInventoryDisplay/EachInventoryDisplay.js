import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './EachInventoryDisplay.css'
// import auth from '../../firebase.init';
const EachInventoryDisplay = (props) => {
    const { _id, name, supplierName, image, image2, description, price, quantity
    } = props.eachInventoryDisplay;
    // console.log(_id);

    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);
    // const navigate = useNavigate();
    // const navigateToInventory = (_id) => {
    //     navigate(`/inventory/${_id}`)
    // if (user) {
    //     navigate(`/inventory/${_id}`)
    // }
    // console.log(`/inventory/${_id}`);
    // if (!user) {
    //     navigate('/signIn')
    // }
    // }



    // if (user) {
    //     navigate(`/inventory/${_id}`)
    // }
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
                    <Card.Text className='bg-secondary w-100 bg-opacity-50 quantity'>
                        Price: {price}

                    </Card.Text>
                    <Card.Text className='bg-warning w-100 bg-opacity-25 quantity'>
                        Quantity: {quantity}
                    </Card.Text>
                    <button
                        //  onClick={() => navigateToInventory(_id)} 
                        className='stockbtn'><Link className='stockbtn bg-warning bg-opacity-75 py-1 px-4' to={`/inventory/${_id}`}>Stock Update</Link></button>
                </Card.Body>
                {/* <button className='{EachInventoryDisplay.delete-btn}'>delete</button> */}
            </Card>
        </div>
    );
};

export default EachInventoryDisplay;