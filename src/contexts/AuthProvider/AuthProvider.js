import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // setting up user 
    const [user, setUser] = useState(null)


    // Pop up sign in method 
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // create user with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in with email password
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out 
    const logOut = () => {
        return signOut(auth)
    }

    // To reduce state from change during refresh 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed : ', currentUser)
            setUser(currentUser)
        })

        return () => unsubscribe()

    }, [])





    const authInfo = { user, providerLogin, logOut, createUser, userSignIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;