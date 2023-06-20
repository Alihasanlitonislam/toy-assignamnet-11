import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../Shwer/NavBer/NavBer';
import Foter from '../Shwer/Foter/Foter';

const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Foter/>
        </div>
    );
};

export default Main;