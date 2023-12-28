import React, { useContext } from 'react';
import { userContext } from '../../AuthContext/AuthContext';

const Home = () => {
    const user = useContext(userContext)
    return (
        <div className="container mx-auto">
            <h1>User Name: {user && user.displayName}</h1>
        </div>
    );
};

export default Home;