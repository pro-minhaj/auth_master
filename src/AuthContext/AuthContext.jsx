import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import App from '../Firebase/Firebase_Confige';

export const userContext = createContext(null);

const AuthContext = ({children}) => {
    const auth = getAuth(App);

    // Name Auth
    const authName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        }) 
    }

    // Email And Password Auth
    const authEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    // Auth Sing In Email And Password 
    const authSingIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        authEmailAndPassword,
        authName,
        authSingIn,
    }
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;