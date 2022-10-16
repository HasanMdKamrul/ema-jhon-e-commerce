import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user,setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        });

        return ()=> unsubscribe();

    },[])
    
    const signUp = (email,password)=> createUserWithEmailAndPassword(auth,email,password);


    const authInfo = {signUp,user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;