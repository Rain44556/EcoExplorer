import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// console.log(loading,user);

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logInWithGoogle = ()=>{
        return signInWithPopup(auth,providerGoogle);
    }

    const signout = () => {
        setLoading(true)
        return signOut(auth);
    };

    const userProfileUpdate = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const userInfo = {
        user,
        setUser,
        signUpUser,
        loginUser,
        signout,
        loading,
        userProfileUpdate,
        logInWithGoogle,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;