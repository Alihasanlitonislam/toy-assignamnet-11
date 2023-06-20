import React, { useContext, useEffect, useState } from 'react';
import { UseAuthContextApi } from '../../AuthContext/AuthContext';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyToy = () => {
    const { user } = useContext(UseAuthContextApi)
    const [mytoys, setMytoys] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://toy-cor-server.vercel.app/mytoy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [user])
    // 
    const hendelDelete = _id => {
        fetch(`https://toy-cor-server.vercel.app/deleteDb/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be delete the fiel!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = mytoys.filter(mytoy => mytoy._id !== _id);
                            setMytoys(remaining);
                        }
                    })
                }
            })
    }
    return (
        <div className="bg-[url('https://cleantechnica.com/files/2022/04/hertz_polestar.jpg')] bg-no-repeat bg-cover bg-fixed">
            <div className="w-11/12 mx-auto py-7 bg-gradient-to-r from-[#2020204d] to-[rgba(21,21,21,0)]">
                <h1 className="text-center pb-3 text-3xl text-white font-medium">Revving Wheels: Turbocharged <br /> Speed  Machines for Ultimate Racing Excitement</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Catagory</th>
                                <th>Seller Name</th>
                                <th>Email</th>
                                <th className='text-end'>Edite</th>
                                <th className='text-end'>Veiw Detels</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mytoys.map(mytoy =>
                                    <tr key={mytoy._id}>
                                        <th>{mytoy.name}</th>
                                        <td>{mytoy.catagory}</td>
                                        <td>{mytoy.sellerName}</td>
                                        <td>{mytoy.emailDB}</td>
                                        <td onClick={() => navigate(`/updatetoy/${mytoy._id}`)}> <span className='flex justify-end '><FaRegEdit /></span></td>
                                        <td onClick={() => hendelDelete(mytoy._id)}> <span className='flex justify-end '><FaTrashAlt /></span></td>
                                    </tr>
                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;