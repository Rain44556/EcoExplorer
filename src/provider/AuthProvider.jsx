import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const newUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const loginUser = (email,password)=>{
return signInWithEmailAndPassword(auth, email, password);
    }

    const signout = ()=>{
        return signOut(auth);
    }

    const userInfo = {
        user,
        setUser,
        newUser,
        loginUser,
        signout,
    };

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;