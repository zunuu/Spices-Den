import React from 'react';
import Advertising from './Home/Advertising';
import Banner from './Home/Banner';
import InventoryItems from './Home/InventoryItems';
import './Homepage.css'
const Homepage = () => {
    return (
        <div className='homepage'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Advertising></Advertising>
        </div>
    );
};

export default Homepage;