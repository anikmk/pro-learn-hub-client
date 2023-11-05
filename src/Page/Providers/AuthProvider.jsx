import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
export const AuthContext = createContext()     
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // create user
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // login with google
        const googleProvider = new GoogleAuthProvider();
        const loginWithGoogle = () => {
            setLoading(true);
            return signInWithPopup(auth,googleProvider)
        }
    // logOutUser
    const logOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        logOutUser

    }

    // current User
    useEffect(()=>{
        const unsubscrive = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('current User',currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscrive();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;