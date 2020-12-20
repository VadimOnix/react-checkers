import React, { useContext, createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const dataBase = [
  {
    email: "vadim@gmail.com",
    password: "1234"
  },
  {
    email: "admin@gmail.com",
    password: "4321"
  }
]


const OptionContext = createContext();

export default function AuthProvider({ children }) {
  let history = useHistory();
  
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState(null)

  const login = (email, pass) => {
    setError(null);
    const user = dataBase.find(u => u.email == email && u.password == pass)
    if (!user) {
      setError("Пользователь не найден")
      return
    }
    setCurrentUser(user)
    localStorage.setItem('LoginInfo', JSON.stringify(user))    
    history.push("/protectedPage")
  }

  const logout = () => {
    setCurrentUser(null)
    history.push("/form")
  }

  useEffect(() => setCurrentUser(localStorage.getItem('LoginInfo')), [])

  return (
    <OptionContext.Provider value={{currentUser, error, isAuth: !!currentUser, login, logout}}>{children}</OptionContext.Provider>
  );
}

// Собственный хук, для того, чтобы не дублировать во всех компонентах "useContext(OptionContext)"
export const useAuth = () => useContext(OptionContext);
