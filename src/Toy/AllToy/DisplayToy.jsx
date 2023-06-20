import React from 'react';
import { Link } from 'react-router-dom';

const DisplayToy = ({ alltoy }) => {
    const {_id,sellerName, name, price,quantity,emailDB } = alltoy;
    // const {name, photo, catagory,discription,price,quantity,rating,sellerName
    return (

        <tr className="mt-2">
            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{emailDB}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className='text-end'>
                <Link to ={`/single/${_id}`} className='view'>View</Link>
            </td>
        </tr>
    );
};

export default DisplayToy;