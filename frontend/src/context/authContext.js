import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { requestLogin, requestRegister, requestVerify } from "../requests/auth.js";
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
  const [registererrors, setRegistererrors] = useState ([]);
  const [loginerrors, setLoginerrors] = useState([]);
  const [message, setMessage] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (loginerrors.length > 0 || registererrors.length > 0) {
      const timer = setTimeout(() => {
        setLoginerrors([]);
        setRegistererrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loginerrors,registererrors]);
  

  const signin = async (user) => {
    try {
      const res = await requestLogin(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data);
      
    } catch (error) {
      console.log(error.response.data.message);
      setLoginerrors(error.response.data.message);
    }
  };

  const signup = async (user) => {
    try {
      const res = await requestRegister(user);
      setUser(res.data);
      console.log(res.data);
      setMessage(["Usuario registrado correctamente"]);
    } catch (error) {
      console.log(error.response.data.message);
      setRegistererrors(error.response.data.message);
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await requestVerify(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        IsAuthenticated,
        loginerrors,
        registererrors,
        message,
        isLoading,
        signin,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;