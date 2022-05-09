
import React from 'react';
import { Link } from 'react-router-dom';
import EachInventoryDisplay from '../../EachInventoryDisplay/EachInventoryDisplay';
import EachManageInventory from '../../EachManageInventory/EachManageInventory';
import InventoryHooks from '../../Hooks/InventoryHook';
import './ManageInventory.css';
import { useForm } from "react-hook-form";
import MyItems from '../SignIn/MyItems/MyItems';

const ManageInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://desolate-meadow-44441.herokuapp.com/myItems';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }

    const [eachInventory, setEachInventory] = InventoryHooks()
    return (
        <div className='d-flex bg-success bg-opacity-10 m-0 p-0 row'>
            <div>
                <form className='d-flex row w-50 align-items-center mx-auto bg-success my-3 rounded bg-opacity-25 p-3' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name of the Item' className='p-2 my-2' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='Name of the Supplier' className='p-2 my-2' {...register("supplierName", { required: true })} />
                    <input placeholder='Short Description of your Items' className='p-2 my-2' {...register("description", { required: true })} />
                    <input placeholder='1st Photo URL of your Items' className='p-2 my-2' {...register("image", { required: true })} />
                    <input placeholder='2nd Photo URL of your Items' className='p-2 my-2' {...register("image2", { required: true })} />
                    <input placeholder='Price' className='p-2 my-2' {...register("price", { required: true, })} />
                    <input placeholder='Quantity' className='p-2 my-2' type="number" {...register("quantity", { required: true, min: 1, max: 10 })} />
                    <input className='p-2 my-2' type="submit" value='Add New' />
                </form>
            </div>

            {
                eachInventory.map(eachInventoryDisplay =>
                    <EachManageInventory key={eachInventoryDisplay._id} eachInventoryDisplay={eachInventoryDisplay} >


                    </EachManageInventory>)
            }
            {/* <MyItems></MyItems> */}
        </div>
    );
};

export default ManageInventory;