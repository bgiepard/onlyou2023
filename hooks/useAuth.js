import {createContext, useContext, useEffect, useState} from "react";
import * as Google from 'expo-auth-session/providers/google';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth';

import { auth } from "../firebaseConfig";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({name: ''});

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '442228808651-i9f823oeh8eg4a22kvl1k2r6rikjc7l9.apps.googleusercontent.com',
    androidClientId: "442228808651-qe1shf55tqhstchggam6pe9pa8rpa9bq.apps.googleusercontent.com"
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token} = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])

  const signInWithGoogle = async () => {
    await promptAsync();
  }

  const logout = () => {
    setUser({})
  }

  const setProfile = (profile) => {
    setUser(profile)
  }

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      logout,
      setProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);
}