import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let navigateToLogin = () => {
        navigate('/signIn')
    }
    if (user) {
        navigate('/home');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register'>
            <Form onSubmit={handleRegister} className=' container w-50 pt-5'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="text" placeholder="Your Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number" name="number" placeholder="Enter your phone number" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Register
                </Button>
                {/* <p>{error}</p> */}
                <p className='fw-bold mt-3'>Already have an account? <span onClick={navigateToLogin}>

                    <Link to="/signIn" className='text-danger text-decoration-none fw-bold '>
                        Sign In Here
                    </Link>
                </span></p>
            </Form>
        </div>
    );
};

export default Register;