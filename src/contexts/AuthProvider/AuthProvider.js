import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // setting up user 
    const [user, setUser] = useState(null)


    // loader 
    const [loading, setLoading] = useState(false)


    // Pop up sign in method 
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // create user with email and password 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update name and photo 
    const updateUserData = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }


    // Verify Email 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // Log in with email password
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // To reduce state from change during refresh 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state changed : ', currentUser)
            if (currentUser === null || currentUser.emailVerified)
                setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()

    }, [])





    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        userSignIn,
        updateUserData,
        loading,
        verifyEmail,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;