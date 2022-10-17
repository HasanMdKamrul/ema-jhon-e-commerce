import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoutes = ({children}) => {

    // ** current page location before login which was requested

    const location = useLocation()

    const {user,loading} = useContext(AuthContext);

    if (loading) {
        return <>loading...</>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'  state={{from: location}} replace/>
};

export default PrivateRoutes;