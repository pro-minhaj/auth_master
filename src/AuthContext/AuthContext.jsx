import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import App from '../Firebase/Firebase_Confige';

export const userContext = createContext(null);

const AuthContext = ({children}) => {
    const auth = getAuth(App);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    // OnAuthStateChanged
    useEffect(() => {
        const connection = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            connection();
        }
    }, [])

    // GoogleAuthProvider
    const googleProvider = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    // GitHubAuthProvider
    const githubProvider = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // LogOut 
    const logout = () => {
       return signOut(auth);
    }

    const userInfo = {
        authEmailAndPassword,
        authName,
        authSingIn,
        logout,
        googleProvider,
        githubProvider,
        user,
        loading
    }
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;