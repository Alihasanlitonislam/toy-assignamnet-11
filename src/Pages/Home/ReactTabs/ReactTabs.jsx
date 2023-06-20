import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cor from '../Cor/Cor';
const ReactTabs = () => {
    const [corToys, setCarToys] = useState([])
    const [cors, setCor] = useState([])
    useEffect(() => {
        fetch('https://toy-cor-server.vercel.app/cortoy')
            .then(res => res.json())
            .then(data => setCarToys(data))
    }, [])
    // console.log(corToys);
    const hendelCor = _id => {
        fetch(`https://toy-cor-server.vercel.app/cortoy/${_id}`)
            .then(res => res.json())
            .then(data => setCor(data.regular_car))
    }
    return (
        <div className='w-11/12 mx-auto text-center p-6'>
            <Tabs>
                <TabList>
                    {
                        corToys.map(cor =>
                            <Tab
                                key={cor._id}
                            ><h1 onClick={() => hendelCor(cor._id)}>{cor.name} </h1></Tab>
                        )
                    }
                </TabList>
                <TabPanel>
                    <div className='md:flex justify-between gap-5 p-3 bg-slate-200'>
                        {
                            cors.map(cor =>
                                <Cor
                                    key={cor._id}
                                    cor={cor}
                                ></Cor>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;