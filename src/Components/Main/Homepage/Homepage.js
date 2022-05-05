import React from 'react';
import Banner from './Home/Banner';
import InventoryItems from './Home/InventoryItems';
import './Homepage.css'
const Homepage = () => {
    return (
        <div className='homepage'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Homepage;