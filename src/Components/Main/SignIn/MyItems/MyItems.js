import React from 'react';
// import EachManageInventory from '../../EachManageInventory/EachManageInventory';
import InventoryHooks from './InventoryHook';
import MyItemDisplay from './MyItemDisplay';
const MyItems = () => {
    const [eachInventory, setEachInventory] = InventoryHooks()

    return (

        <div>
            {
                eachInventory.slice(13, 40).map(eachInventoryDisplay =>
                    <MyItemDisplay key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} >


                    </MyItemDisplay>)
            }



        </div>
    );
};

export default MyItems;