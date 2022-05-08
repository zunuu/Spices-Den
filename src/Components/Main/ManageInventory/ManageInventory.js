
import React from 'react';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import EachManageInventory from '../../EachManageInventory/EachManageInventory';
import InventoryHooks from '../../Hooks/InventoryHook';
import './ManageInventory.css'
const ManageInventory = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    return (
        <div className='d-flex  row'>
            {
                eachInventory.map(eachInventoryDisplay =>
                    <EachManageInventory key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} >


                    </EachManageInventory>)
            }
        </div>
    );
};

export default ManageInventory;