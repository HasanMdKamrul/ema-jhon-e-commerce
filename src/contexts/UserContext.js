import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    
    
    const signUp = (email,password)=> createUserWithEmailAndPassword(auth,email,password);


    const authInfo = {signUp};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;