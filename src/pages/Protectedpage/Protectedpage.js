import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
const Protectedpage = ({ children }) => {
    const auth=getAuth(app)
     const [user] = useAuthState(auth);
    let location = useLocation();
    if(!user){
        return <Navigate to="/volunter" state={{ from: location }} replace />;
    }
    return children
};

export default Protectedpage;