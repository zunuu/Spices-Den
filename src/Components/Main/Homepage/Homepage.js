import React from 'react';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import InventoryHooks from '../../Hooks/InventoryHook';
import Advertising from './Home/Advertising';
import Banner from './Home/Banner';
import InventoryItems from './Home/InventoryItems';
import './Homepage.css'
const Homepage = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    // console.log(eachInventory);

    return (


        <div className='homepage'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>

            <section className='container mx-auto pt-5 d-flex row justify-content-center  my-5'>

                {
                    eachInventory.slice(0, 6).map(eachInventoryDisplay =>
                        <EachInventoryDisplay key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} ></EachInventoryDisplay>)
                }
                <button className='mt-4'>Manage Inventory</button>
            </section>
            <Advertising></Advertising>
        </div>
    );
};

export default Homepage;