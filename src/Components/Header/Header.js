import { Button } from 'bootstrap';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>

            <Navbar collapseOnSelect expand="lg" bg="dark bg-opacity-25" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link className='brandname' to='/'><strong className='brandname'>Spices🌶️</strong><span className='brandname'>Den</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-success bg-opacity-75 border-0 px-3 py-2' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navlinks">
                            <Nav.Link href="#home">
                                <Link className="mx-2 " to='/home'>Home</Link>
                            </Nav.Link>


                            <Nav.Link href="#manageInventory">
                                <Link className="  mx-2 " to='/manageInventory'>Manage Inventory</Link>
                            </Nav.Link>





                            <Nav.Link href="#blogs">
                                <Link className=" mx-2 " to='/blogs'>Blogs</Link>
                            </Nav.Link>


                            {
                                user ?
                                    <div className='d-flex'>
                                        < Nav.Link href="#signOut">
                                            <Link onClick={handleSignOut} className=" mx-2 " to='/signOut'>Sign Out</Link>
                                        </Nav.Link>
                                        <Nav.Link href="#myItems">
                                            <Link onClick={handleSignOut} className=" mx-2 " to='/myItems'>My Items</Link>
                                        </Nav.Link>
                                        <Nav.Link href="#signOut">
                                            <Link onClick={handleSignOut} className=" mx-2 " to='/signOut'>Manage Items</Link>
                                        </Nav.Link>
                                    </div>

                                    :


                                    <Nav.Link href="#signIn">
                                        <Link className=" mx-2 " to='/signIn'>Sign In</Link>
                                    </Nav.Link>}







                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div >

    );
};

export default Header;