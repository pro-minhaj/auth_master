import React, { useContext } from 'react';
import { userContext } from '../../AuthContext/AuthContext';

const Home = () => {
    const {user, logout} = useContext(userContext);

    // Logout 
    const logoutFromHere = () => {
        logout()
        .then(() => {})
        .catch(() => {})
    }
    
    return (
        <div className="container mx-auto">
            {
                user && <div className='w-1/2 mx-auto my-16 shadow-xl shadow-slate-300 p-10 rounded-lg flex flex-col items-center gap-4'>
                    <h4 className='text-lg text-black'>Email: {user && <span>{user.email}</span>}</h4>
                    <h6>{user.metadata.creationTime}</h6>
                    <h6>{user.metadata.lastSignInTime}</h6>
                    <button onClick={logoutFromHere} className='btn btn-error text-white text-lg'>Logout</button>
                </div>
            }
        </div>
    );
};

export default Home;