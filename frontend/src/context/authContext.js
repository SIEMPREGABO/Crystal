import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { requestLogin, requestRegister } from "../requests/auth.js";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState ([]);
  const [message, setMessage] = useState([]);
  const [IsRegistered, setIsRegistered] = useState(false);
  
  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage([]);
        setIsRegistered(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const signin = async (user) => {
    try {
      const res = await requestLogin(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data);
      
    } catch (error) {
      console.log(error.response.data.message);
      setErrors(error.response.data.message);
    }
  };

  const signup = async (user) => {
    try {
      const res = await requestRegister(user);
      setUser(res.data);
      console.log(res.data);
      setIsRegistered(true);
      setMessage(["Usuario registrado correctamente"]);
    } catch (error) {
      console.log(error.response.data.message);
      setErrors(error.response.data.message);
    }
  }
  
  return (
    <AuthContext.Provider
      value={{
        user,
        IsAuthenticated,
        errors,
        message,
        IsRegistered,
        signin,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;