import { useEffect, useState } from "react";

const InventoryHooks = () => {
    const [eachInventory, setEachInventory] = useState([]);
    useEffect(() => {
        fetch('https://desolate-meadow-44441.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setEachInventory(data));
    }, []);
    return [eachInventory, setEachInventory];
}
export default InventoryHooks;