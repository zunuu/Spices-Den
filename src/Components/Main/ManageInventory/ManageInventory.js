
import React from 'react';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import EachManageInventory from '../../EachManageInventory/EachManageInventory';
import InventoryHooks from '../../Hooks/InventoryHook';
import './ManageInventory.css'
const ManageInventory = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    return (
        <div className='d-flex m-0 p-0 row'>
            {
                eachInventory.map(eachInventoryDisplay =>
                    <EachManageInventory key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} >


                    </EachManageInventory>)
            }
        </div>
    );
};

export default ManageInventory;