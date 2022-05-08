
import React from 'react';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import InventoryHooks from '../../Hooks/InventoryHook';
import './ManageInventory.css'
const ManageInventory = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    return (
        <div className='d-flex  row'>
            {
                eachInventory.map(eachInventoryDisplay =>
                    <EachInventoryDisplay key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} >


                    </EachInventoryDisplay>)
            }
        </div>
    );
};

export default ManageInventory;