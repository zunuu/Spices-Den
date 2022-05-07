
import React from 'react';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import InventoryHooks from '../../Hooks/InventoryHook';

const ManageInventory = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()
    return (
        <div>
            this is allinv
            {
                eachInventory.map(eachInventoryDisplay =>
                    <EachInventoryDisplay key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} ></EachInventoryDisplay>)
            }
        </div>
    );
};

export default ManageInventory;