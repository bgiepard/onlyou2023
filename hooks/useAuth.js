import {createContext, useContext, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({name: ''});

  const signInWithGoogle = async () => {
    setUser({
      name: 'Bartek'
    })
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