import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const SignIn = () => {
    // let [signInWithGoogle] = useSignInWithGoogle(auth);
    // if (error) {
    //     return (
    //         <div>
    //             <p>Error: {error.message}</p>
    //         </div>
    //     );
    // }
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorDiv;
    if (error) {

        errorDiv = <div className='mt-3 text-danger fs-5'>
            <p>Error: {error.message}</p>
        </div>

    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    // if (!user) {
    //     navigate('/signIn')
    // }
    const provider = new GoogleAuthProvider();
    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='bg-white login pt-5'>
            <h2 className='text-primary  text-center'>Login Here</h2>
            <Form onSubmit={handleSubmit} className='container w-50 '>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="primary" className=' w-100' type="submit">
                    Login
                </Button>
                {errorDiv}


                <br /> { } &nbsp;
                <Button onClick={() => handleSignInGoogle()} variant="success" className='mt-1 mb-4 w-100' type="submit" >
                    Sign In With Google
                </Button>
                <p className='fw-bold mt-3'>New to Spices-Den? <Link to="/register" className='text-danger text-decoration-none' onClick={navigateRegister}>Please Sign Up</Link></p>

            </Form>

        </div>
    );
};

export default SignIn;