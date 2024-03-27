import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { requestLogin, requestRegister,requestLogout, requestVerify, requestReset, requestPass, requestUpdate} from "../requests/auth.js";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [IsSended, setIsSended] = useState(false);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [IsChanged, setIsChanged] = useState(false);

  const [registererrors, setRegistererrors] = useState ([]);
  const [reseterrors, setReseterrors] = useState([]);
  const [resetpasserrors, setResetpasserrors] = useState([]);
  const [loginerrors, setLoginerrors] = useState([]);
  const [updateerrors, setUpdateerrors] = useState([]);

  const [message, setMessage] = useState([]);
  const [messagepass, setMessagepass] = useState([]);
  const [messageupdate, setMessageupdate] = useState([]);

  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    if (message.length > 0) {
      const timer = setTimeout(() => {
        setMessage([]);
        //setIsChanged(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (messagepass.length > 0) {
      const timer = setTimeout(() => {
        setMessagepass([]);
        setIsChanged(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (IsChanged) {
      const timer = setTimeout(() => {
        setIsChanged(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
    if(messageupdate.length > 0){
      const timer = setTimeout(() => {
        setMessageupdate([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [messagepass, IsChanged, messageupdate]);

  useEffect(() => {
    if (loginerrors.length > 0 || registererrors.length > 0 || reseterrors.length || updateerrors.length > 0) {
      const timer = setTimeout(() => {
        setLoginerrors([]);
        setRegistererrors([]);
        setReseterrors([]);
        setUpdateerrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loginerrors,registererrors, reseterrors, updateerrors]);
  

  const signin = async (user) => {
    try {
      const res = await requestLogin(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data);
      //console.log(error.response.data.message);
    } catch (error) {
      console.log(error.response);
      setLoginerrors(error.response.data.message);
    }
  };

  const signup = async (user) => {
    try {
      const res = await requestRegister(user);
      //setUser(res.data);
      console.log(res.data);
      setMessage(["Usuario registrado correctamente"]);
    } catch (error) {
      //console.log(error.response.data.message);
      setRegistererrors(error.response.data.message);
    }
  }

  const resetToken = async (user) => {
    try{
      const res = await requestReset(user);
      if(!res.data) return setIsSended(false);
      setIsSended(true);
      setMessage([res.data.message]);    
    }catch(error){
      //console.log(error.response.data.message);
      setReseterrors(error.response.data.message);
    }
  }
  
  const resetPass = async (user) => {
    try {
      //console.log(user);
      const res = await requestPass(user);
      console.log(res.data);
      setMessagepass("Contraseña cambiada con exito");
    } catch (error) {
      setResetpasserrors(error.response.data.message);
    }
  }

  const logout = async () =>{
    const res = await requestLogout();
    console.log(res);
    setIsAuthenticated(false);
    setUser(null);
  }

  const updateUser = async (user) =>{
    try {
      console.log(user);
      const res = await requestUpdate(user);
      setUser(res.data);
      setMessageupdate("Informacion Actualizada");
    } catch (error) {
      setUpdateerrors(error.response.data.message);      
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
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        //setUser(res.data);
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
        IsSended,
        loginerrors,
        registererrors,
        reseterrors,
        resetpasserrors,
        updateerrors,
        messageupdate,
        message,
        isLoading,
        IsChanged,
        messagepass,
        signin,
        signup,
        resetToken,
        resetPass,
        updateUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;