import React,{ useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Global";


export const AuthContext = createContext();

export const AuthContextProvider = ( {children} ) => {

    const[auth, setAuth] = useState({});


    useEffect(()=>{
        authUser();
    },[]);

    const authUser = async () =>{
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if(!token || !user){
            return false;
        }

        const userObject = JSON.parse(user);
        const userId = userObject.id; + userId;

        const request = await fetch(Global.url + '/home/'+ userId,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await request.json();

        setAuth(data.userData);
    }

  return (
    
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;



