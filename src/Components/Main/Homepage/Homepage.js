import React from 'react';
import { useNavigate } from 'react-router-dom';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import InventoryHooks from '../../Hooks/InventoryHook';
import Advertising from './Home/Advertising';
import Banner from './Home/Banner';
import InventoryItems from './Home/InventoryItems';
import OurServices from './Home/OurServices';
import './Homepage.css'
const Homepage = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    // console.log(eachInventory);
    const navigate = useNavigate();
    const navigateToManageInventory = () => {
        navigate('/manageInventory')
    }
    return (


        <div className='homepage mx-0 px-0 bg-success bg-opacity-10'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>

            <section className='container inventory-items mx-auto pt-5 d-flex row justify-content-center bg-success bg-opacity-10 pt-0 pb-5 my-0'>

                {
                    eachInventory.slice(0, 6).map(eachInventoryDisplay =>
                        <EachInventoryDisplay key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} ></EachInventoryDisplay>)
                }
                <button onClick={() => navigateToManageInventory()} className='mt-4 manage-inventory-btn '>Manage Inventory</button>
            </section>
            <OurServices></OurServices>
            <Advertising></Advertising>
        </div>
    );
};

export default Homepage;