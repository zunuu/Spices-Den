import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
const SignIn = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }


    return (
        <div className='bg-white login pt-5'>
            <h2 className='text-primary  text-center'>Login Here</h2>
            <Form onSubmit={handleSubmit} className='container w-50 '>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="primary" className=' w-100' type="submit">
                    Login
                </Button> <br /> { } &nbsp;

                <p className='fw-bold mt-3'>new to Spices-Den? <span >


                </span></p>

            </Form>

        </div>
    );
};

export default SignIn;