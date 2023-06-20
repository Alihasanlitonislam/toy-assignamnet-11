import { useLoaderData, } from "react-router-dom";
import DisplayToy from "./DisplayToy";
import { useState } from "react";
const AllToy = () => {
    const loderAllToy = useLoaderData()
    const [searchText, setSearchText] = useState('')
    const [catagory, setCatagory] = useState(loderAllToy)
    const hendelSearch = () => {
        fetch(`https://toy-cor-server.vercel.app/catagorySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(catagory)
                setCatagory(data)
            })
    }

    // console.log(catagory);
    // 
    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqT-SKkhHX2B0aoEvAuv3cS4Zs6QM9rW8nRw&usqp=CAU')] bg-no-repeat bg-cover bg-fixed">
            <div className="w-11/12 mx-auto py-7 bg-gradient-to-r from-[#2020204d] to-[rgba(21,21,21,0)]">
                <h1 className="text-center  text-3xl text-white font-medium">Revving Wheels: Turbocharged <br /> Speed  Machines for Ultimate Racing Excitement</h1>
                <h1 className="text-center text-xl pt-3 pb-0 text-white font-medium">Speedster Adventures: Unleash Thrills with Action-Packed Car Toy Category Search</h1>
                <div className="overflow-x-auto">
                    <div className="flex justify-center items-center py-5">
                        <div className="border flex items-center bg-gray-400 rounded-md">
                            <input
                                onChange={e => setSearchText(e.target.value)}
                                type="text"
                                placeholder="search"
                                className="input input-bordered" />
                            <button onClick={hendelSearch} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 text-2xl rounded-r-md">Search</button>
                        </div>
                    </div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Prodack Name</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className='text-end'>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                catagory?.map(alltoy => <DisplayToy
                                    key={alltoy._id}
                                    alltoy={alltoy}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;