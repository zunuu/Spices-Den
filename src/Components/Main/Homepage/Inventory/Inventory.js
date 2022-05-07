import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const { _id } = useParams();
    // console.log(_id);
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/62767aac23354bf88a4804c6`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    // const { _id, name, supplierName, image, image2, description, price, quantity
    // } = props.eachInventoryDisplay;
    return (
        <div>
            this is inventory detail:{_id}
            {/* {name}{supplierName},{image} */}

        </div>
    );
};

export default Inventory;