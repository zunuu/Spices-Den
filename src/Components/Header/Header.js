import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='container p-0'>
                <Nav className="justify-content-center text-secondary  mt-3" activeKey="/home">
                    <Nav.Item>
                        <Link className='navItems ' to="/home">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='navItems ' to="/inventory">Inventory</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='navItems ' to="/blogs">Blogs</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className='navItems ' to="/signIn">Sign In</Link>
                    </Nav.Item>



                </Nav>
            </div >
        </div>
    );
};

export default Header;