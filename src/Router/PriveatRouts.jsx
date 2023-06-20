import React, { useContext } from 'react';
import { UseAuthContextApi } from '../AuthContext/AuthContext';
import { Navigate} from "react-router";
import { RiseLoader } from 'react-spinners';

const PriveatRouts = ({ children }) => {
    const { user, loder } = useContext(UseAuthContextApi)
    if (loder) {
        <RiseLoader
            color="#36d7b7"
            width="100 %"
            height="100vh"
            margin='auto' />
    }
    if (user) {
        return children 
    }
    return <Navigate to="/login"></Navigate>
};

export default PriveatRouts;