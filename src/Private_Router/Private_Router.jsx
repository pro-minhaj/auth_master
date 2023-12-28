import React, { useContext } from 'react';
import { userContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const Private_Router = ({ children }) => {
    const {user, loading} = useContext(userContext);

    if(loading){
        return <div className='container mx-auto my-4 flex justify-center items-center'>
            <button type="button" className="bg-indigo-500" disabled>
            Processing...
        </button>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default Private_Router;