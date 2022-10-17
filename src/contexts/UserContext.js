import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
            console.log("User Logged In")
        });

        return ()=> unsubscribe();

    },[])
    
    const signUp = (email,password)=> createUserWithEmailAndPassword(auth,email,password);
    const logIn = (email,password)=> signInWithEmailAndPassword(auth,email,password);
    const signOutFunctionality = ()=> signOut(auth);


    const authInfo = {signUp,user,logIn,signOutFunctionality, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;