import React, { createContext, useEffect, useState } from 'react';
export const UseAuthContextApi = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';

const auth = getAuth(app)
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loder, setLoder] = useState(true)
    const [googleUser, setGoogleueser] = useState(true)
     // create user email and password with firebase
    const createEmailPassword = (email, password)=>{
        setLoder(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // sing in with email and password
    const loginEmailPassword = (email, password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out with email and password
    const logOutEmailPassword = ()=>{
        setLoder(true)
       return signOut(auth)
    }
    // login with google email
    const googleLogin = (provider)=>{
        setLoder(true)
        return signInWithPopup(auth,provider)
    }

    const googleDisplay = (googleUser) =>{
        setGoogleueser(googleUser)
        
        
    }
    // unSubcire
    useEffect(()=>{
        const unSubcire = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
            setLoder(false)
        })
        return (()=>{
            return unSubcire
        })
    },[])
    const authInfo = {
        user,
        loder,
        //create with email and password
        createEmailPassword,
        // sing in with email and password 
        loginEmailPassword,
        // sing out 
        logOutEmailPassword,
        // google login 
        googleLogin,
        //google display
        googleDisplay,
        googleUser
    }
    return (
        <UseAuthContextApi.Provider value={authInfo}>
            {children}
        </UseAuthContextApi.Provider>
    );
};

export default AuthContext;