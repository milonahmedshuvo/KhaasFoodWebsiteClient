import React, {createContext, useState} from 'react'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from '../../firebase.config';
export const DiclareContext =  createContext()
const auth = getAuth(app);


const AuthProviderApp = ( {children} ) => {
          const  [user, setUser] = useState({name: 'milon AHmdesd'})



    const userCreate = (email, password)=> {   
      return createUserWithEmailAndPassword(auth, email, password)
    }

      
    const userLogin = (email, password ) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const info = { user, userCreate, userLogin }

  return (
    <div>
      <DiclareContext.Provider value={info}>
             {children}
      </DiclareContext.Provider>
    </div>
  )
}

export default AuthProviderApp
