import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if (loading) {
        return <>loading...</>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'/>
};

export default PrivateRoutes;