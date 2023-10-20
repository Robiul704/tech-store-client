import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState()
    const [loading,setloading]=useState(true)

    const createuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinuser=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
  
    const signout=()=>{
        setloading(true)
        signOut(auth)
    }
    const googlesignin=new GoogleAuthProvider()
    const googlesinin=()=>{
        setloading(true)
        return signInWithPopup(auth,googlesignin)
    }


useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setloading(false)
        setuser(currentuser)
    })
    return()=>{
        unsubscribe()
    } 
},[])



    const userinfo={
        user,
        loading,
       createuser,
       signinuser,signout,googlesinin
    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;